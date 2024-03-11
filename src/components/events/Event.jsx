import React from 'react'

import "./Events.css";


const Event = (props) => {
    return (

        <div className="event">
            <div className='event-img'>
                <img src={props.img} alt="#" />
            </div>
            <h1 className='event-title'>{props.name}</h1>
            <h2 className='event-college'>{props.brand.toUpperCase()}</h2>
            <p className='event-description'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam, rerum illum ducimus tempora alias amet!</p>
            <div className="buttons">
                <button> <a href="https://forms.gle/bicev1fJ1XDBnthbA" target="_blank">Register</a> </button>
                <button> More info</button>
            </div>
        </div>

    )
}

export default Event