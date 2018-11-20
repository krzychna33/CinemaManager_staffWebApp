import React from 'react';
import { DateTimePicker } from 'material-ui-pickers';
import moment from 'moment';
import { runInThisContext } from 'vm';

export default class ShowingForm extends React.Component {
    constructor(props){
        super();
        this.state = {
            showingId: props.showing ? props.showing.id : '',
            startTime: props.showing ? moment(props.showing.showingTime) : moment(),
            endTime: props.showing ? moment(props.showing.showingEndTime) : moment().add(2, 'hours'),
            price: props.showing ? (props.showing.price/100).toString() : '',
            movieId: props.showing ? props.showing.movie_id : 1
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

    onSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit({
            movie_id: this.state.movieId,
            showingEndTime: this.state.endTime.format("YYYY-MM-DD HH:mm:ss"),
            showingTime: this.state.startTime.format("YYYY-MM-DD HH:mm:ss"),
            price: parseFloat(this.state.price, 10) * 100
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
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
                    <select value={this.state.movieId} onChange={this.onMovieChange}>
                        {this.props.movies.map((movie) => {
                            return <option key={movie.id} value={movie.id}>{movie.title}</option>
                        })}
                    </select>
                    <input
                        type="text"
                        placeholder="Price"
                        value={this.state.price}
                        onChange={this.onPriceHandle}
                    />
                    <button>Save showing</button>
                </form>
            </div>
        )
    }
}