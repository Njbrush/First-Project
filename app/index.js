import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MovieRow from './components/MovieRow.jsx'
import SearchBar from './components/SearchBar.jsx'
import Stars from './components/Stars.jsx'
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import UserContainer from './containers/UserContainer.jsx'
import MainContainer from './containers/MainContainer.jsx'


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return(
      
                <Router>
  
                <Route path="/" exact component={MainContainer}/>
                <Route path="/history" component={UserContainer}/>
          
                </Router>

        )
    }
}

ReactDOM.render((<App/>), document.getElementById('root'))