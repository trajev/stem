import React from 'react'
import "./Navbar.css";

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar-div'>

        <div className='logo'>
        </div>

        <div className="menu">
            <Link to="/events"><a href="">Events </a></Link>
            <Link to="/booking"><a href="">Booking </a></Link>

            <div className="profile">
                <Link to="/dashboard" ><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F005%2F544%2F718%2Foriginal%2Fprofile-icon-design-free-vector.jpg&f=1&nofb=1&ipt=3c1ac920f0ab1d550919138abe51e4a719c3f7b525859fe9255ae44f4a24ce40&ipo=images" alt="#" /></Link>
            </div>
            
        </div>

    </div>
  )
}

export default Navbar