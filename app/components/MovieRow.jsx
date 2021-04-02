import React, { useState } from 'react'
import { render } from 'react-dom'
import Stars from './Stars.jsx'


class movieRow extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            stars: null,
            check: {}
        }
    }

    setRating(event){
        const rating = event.target.value
        this.setState({stars: rating})
        const postMovieData = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title: this.props.movie.title, rating: rating})
        };
        fetch('http://localhost:3000', postMovieData)
    }

    render(){
    return(
         <table className='table' key={this.props.movie.id}>
                <tbody>
                    <tr>
                        <td>
                            <img className='movieposter' alt='poster' src={this.props.movie.poster_src}/>
                        </td>
                        <td className='movieinformation'>
                             <p className='title'>{this.props.movie.title} </p>
                            <p className='overview'>{this.props.movie.overview}</p>
                        </td>
                        <td className='stars'>
                            <Stars key={this.props.movie.id} stars={this.state.stars} onClick={this.setRating.bind(this)}/>
                        </td>
                    </tr>
                </tbody>
            </table>
    )
    }
}

export default movieRow