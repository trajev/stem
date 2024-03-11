import React from 'react'
import "./Booking.css";

const BookingCard = (props) => {

    const handleClick = (link) => {
        window.open( link );
    }

    return (
        <div className='booking-div' onClick={ () => window.open(props.link, "_blank") } >
            <img src={props.image} alt="" />
            <div className='contents'>
                <div className="inner-contents">
                    <div className="college-name">{props.name}</div>
                    <div className='college-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero commodi maxime veniam architecto omnis sapiente ad quae. Hic, quos magni.</div>
                </div>
                <div className='pricing-details'>
                    <div className="price">
                        <h3>Price</h3>
                        <h4>{props.price}</h4>
                    </div>
                    <div className='capacity'>
                        <h3>Capacity</h3>
                        <h4>{props.capacity}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingCard