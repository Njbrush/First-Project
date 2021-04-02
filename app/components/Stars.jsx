import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

const Stars = (props) => {
    return(
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return(
                <label id={i} key={i} className='star'>
                <input type='radio' name='rating' value={ratingValue} onClick={props.onClick}/>
                <FaStar key={i} color={props.stars >= ratingValue ? "yellow" : "grey" }size={50} 
                />
                </label>
                )
            })}
        </div>
    )
}

export default Stars