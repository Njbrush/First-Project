import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import MovieRow from '../components/MovieRow.jsx'
import SearchBar from '../components/SearchBar.jsx'
import Stars from '../components/Stars.jsx'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import userContainer from '../containers/UserContainer.jsx'

class MainContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            rows: null,
            stars: null,
            showMenu: false
        }

        this.performSearch()
        this.showMenu = this.showMenu.bind(this);
    }

    performSearch(searchTerm ){
        const urlString = 'https://api.themoviedb.org/3/search/movie?api_key=e30af747df7905a923cedbcf8b405f72&query=' + searchTerm
        const getlist = fetch(urlString)
        .then(response => {
            return response.json()
        }).then(data => {
            const results = data.results
            const movieRows = [];
            results.forEach((movie) => {
                movie.poster_src = "https://image.tmdb.org/t/p/w200/" + movie.poster_path
                const movies = <MovieRow stars={this.state.stars} key={movie.id} movie={movie}/>
                if(movie.poster_path !== null){
                movieRows.push(movies)
                }
                this.setState({rows: movieRows})
            })
        })
        .catch(err => {
            console.log('Not a movie', err)
        })
    }

    searchChange(event){
        const searchTerm = event.target.value
        this.performSearch(searchTerm)
    }

    showMenu(event) {
        event.preventDefault();
        
        this.setState({ showMenu: true });
      }
      
    

    render(){
        return(
         
            <div className='maincontainer'>
            <div className='header'>
                <h1>Solo Project ¯\_(ツ)_/¯</h1>
                <SearchBar placeholder={'Search...'} onChange={this.searchChange.bind(this)}/>
                <Button component={Link} to="/" className='user' onClick={this.showMenu}>Andrew Kim</Button>
                {this.state.showMenu ? <Button component={Link} to="/history" id="menu">History</Button> : null}
            </div>

            <div>
                <div className='searchcontainer'>
                {this.state.rows}
            </div>


            <div className='footer'>

            </div>
            </div>
            </div>
         
        )
    }

}

export default MainContainer