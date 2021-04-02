import React, { Component } from 'react';

const SearchBar = (props) => {
    return(
        <input type='search'
        placeholder={props.placeholder}
        onChange={props.onChange}
        />
    )
}

export default SearchBar