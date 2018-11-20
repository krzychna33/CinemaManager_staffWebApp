import React from 'react';
import { DateTimePicker } from 'material-ui-pickers';
import moment from 'moment';
import { runInThisContext } from 'vm';

export default class ShowingForm extends React.Component {
    constructor(props){
        super();
        this.state = {
            showingId: props.showing ? props.showing.id : '',
            startTime: props.showing ? props.showing.showingTime : moment(),
            endTime: props.showing ? props.showing.showingEndTime : moment().add(2, 'hours'),
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

    onSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit({
            movie_id: this.state.movieId,
            showingEndTime: this.state.endTime.format("YYYY-MM-DD HH:mm:ss"),
            showingTime: this.state.startTime.format("YYYY-MM-DD HH:mm:ss"),
            price: parseInt(this.state.price, 10) * 100
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
                    <select>
                        {this.props.movies.map((movie) => {
                            if(movie.id === this.state.movie_id){
                                return <option key={movie.id} selected>{movie.title}</option>
                            }
                            return <option key={movie.id}>{movie.title}</option>
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