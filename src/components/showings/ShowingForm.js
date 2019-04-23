import React from 'react';
import { DateTimePicker } from 'material-ui-pickers';
import moment from 'moment';
import Switch from '@material-ui/core/Switch';

export default class ShowingForm extends React.Component {
    constructor(props){
        super();
        const movieId = props.movies.length > 0 ? props.movies[0].id : ''
        this.state = {
            showingId: props.showing ? props.showing.id : '',
            startTime: props.showing ? moment(props.showing.showingTime) : moment(),
            endTime: props.showing ? moment(props.showing.showingEndTime) : moment().add(2, 'hours'),
            price: props.showing ? (props.showing.price/100).toString() : '',
            movieId: props.showing ? props.showing.movie_id : movieId,
            active: props.showing ? props.showing.active : 1
        }
    }

    onStartTimeChange = (time) =>{
        const endTime = time.valueOf();
        this.setState(() => ({
            startTime: time
        }))
        this.setState(() => ({
            endTime: moment(endTime).add(2, 'hours')
        }))
    }

    onEndTimeChange = (time) =>{
        this.setState(() => ({
            endTime: time
        }))
    }

    onPriceHandle = (e) => {
        const price = e.target.value;
        if (!price || price.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ price }))
        }
    }

    onMovieChange = (e) => {
        const selectFieldValue = e.target.value;
        this.setState(() => ({
            movieId: selectFieldValue
        }))
    }
    
    onActiveChange = (e) => {
        const active = e.target.checked ? 1 : 0;
        this.setState(() => ({active}))
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.price){
            this.props.onSubmit(undefined, 'You have to set price.')
        } else {
            this.props.onSubmit({
                movie_id: this.state.movieId,
                showingEndTime: this.state.endTime.format("YYYY-MM-DD HH:mm:ss"),
                showingTime: this.state.startTime.format("YYYY-MM-DD HH:mm:ss"),
                price: parseFloat(this.state.price, 10) * 100,
                active: this.state.active
            })
        }
    }

    render(){
        return(
                <form onSubmit={this.onSubmit} className="showingForm__form">
                    <div className="showingForm__datePickerWrapper">
                        <DateTimePicker
                            autoOk
                            ampm={false}
                            value={this.state.startTime}
                            onChange={this.onStartTimeChange}
                        />
                        <DateTimePicker
                            autoOk
                            ampm={false}
                            value={this.state.endTime}
                            onChange={this.onEndTimeChange}
                        />
                    </div>
                    <select value={this.state.movieId} onChange={this.onMovieChange} className="select">
                        {this.props.movies.map((movie) => {
                            return <option key={movie.id} value={movie.id}>{movie.title}</option>
                        })}
                    </select>
                    <input
                        type="text"
                        placeholder="Price"
                        className="textInput"
                        value={this.state.price}
                        onChange={this.onPriceHandle}
                    />
                    <Switch
                        checked={this.state.active == 1 ? true : false}
                        onChange={this.onActiveChange}
                    />
                    <button className="btn btn-success button">Save showing</button>
                </form>
        )
    }
}