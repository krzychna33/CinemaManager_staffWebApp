import React from 'react';
import axiosInstance from '../../config/axios';

export default class MovieForm extends React.Component {
    constructor(props){
        super();
        this.state = {
            id: props.movie ? props.movie.id : '',
            title: props.movie ? props.movie.title  : '',
            year: props.movie ? props.movie.year  : '',
            description: props.movie ? props.movie.description : '',
            image: props.movie ? props.movie.image : ''
        }
        this.fileInput = React.createRef();
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
    
    onImageUploaderChange = (e) => {
        const imageToUpload = e.target.value;
        this.setState(() => ({imageToUpload}));
    }

    onImageUploaderSubmit = (e) => {
        e.preventDefault();
        if(this.fileInput){
            const formData = new FormData();
            formData.append('image', this.fileInput.current.files[0]);
            axiosInstance.post(`/movies/media-upload/${this.state.id}`, formData).then((res) => {
                if(res.status === 200){
                    this.setState(() => ({image: res.data.data.image}));
                }
            }).catch((e) => {
                console.log(e);
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
                    {
                        this.state.image  && <img className="coverImage" src={`http://localhost:8000/storage/${this.state.image}`}/>
                    }
                </form>

                {
                    this.state.id && (
                        <form onSubmit={this.onImageUploaderSubmit}>
                            <input type="file" ref={this.fileInput} />
                            <button>Save image</button>
                        </form>
                    )
                }

            </div>
        )
    }
}