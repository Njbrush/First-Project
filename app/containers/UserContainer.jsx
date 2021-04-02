import React, { Component } from 'react';
import SearchBar from '../components/SearchBar.jsx'

class UserContainer extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        fetch('http://localhost:3000/history')
    }

    render(){
        return(
        <div className='test'>
           <h1>NOT FINISHED</h1>
        </div>
        )
    }
}

export default UserContainer