import React from 'react';

export default class MovieForm extends React.Component {
    constructor(props){
        super();
        this.state = {
            title: props.movie ? props.movie.title  : '',
            year: props.movie ? props.movie.year  : '',
            description: props.movie ? props.movie.description : ''
        }
    }

    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({title}));
    }

    onYearChange = (e) => {
        const year = e.target.value;
        if(!year || year.match(/^\d{0,4}$/)){
            this.setState(() => ({year}));
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(!this.state.title || !this.state.year || !this.state.description){
            this.props.onSubmit(undefined, 'You have to set title, year and description.')
        } else {
            this.props.onSubmit({
                title: this.state.title,
                year: this.state.year,
                description: this.state.description
            })
        }
    }

    render(){
        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="text" placeholder="Title" value={this.state.title} onChange={this.onTitleChange}/>
                    <input type="text" placeholder="Year" value={this.state.year} onChange={this.onYearChange}/>
                    <textarea placeholder="Movie Description" value={this.state.description} onChange={this.onDescriptionChange}></textarea>
                    <button>Save movie</button>
                </form>
            </div>
        )
    }
}