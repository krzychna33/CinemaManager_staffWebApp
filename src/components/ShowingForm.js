import React from 'react';


export default class ShowingForm extends React.Component {


    render(){
        return(
            <div>
                <form>
                    <select>
                        {this.props.movies.map((movie) => {
                            return <option key={movie.id}>{movie.title}</option>
                        })}
                    </select>
                </form>
            </div>
        )
    }
}