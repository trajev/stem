import React from 'react'
import Navbar from '../Navbar'
import './Events.css'
import Event from "./Event";
import AddButton from '../AddButton';

const Events = () => {

  let productJSON = [{
    id: 0,
    name: "Razer Death Stalker",
    image: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/hackathon-flyer-design-template-4fc2cfe7a4d4b3913e5192047a0bb29d_screen.jpg?ts=1637052463",
    brand: "ace",
    description: "Collaborative Innovation",
    price: "180"

  },
  {
    id: 1,
    name: "Razer Huntsman",
    image: "https://i.pinimg.com/736x/55/36/35/55363525f4601cd6a9eff0884ff59845--hackathon-open-source.jpg",
    brand: "vnrvjiet",
    description: "Time-Pressure Challenge",
    price: "200"
  },
  {
    id: 3,
    name: "Razer Basilisk",
    image: "https://i.pinimg.com/originals/fc/df/17/fcdf17404f0ad5a416a037d6032653b0.jpg",
    brand: "cbit",
    description: "Hands-On Learning",
    price: "280"
  },
  {
    id: 4,
    name: "Kraken",
    image: "https://bbdu.ac.in/wp-content/uploads/2022/03/final-poster-som.jpeg",
    brand: "iare",
    description: "Innovative Solutions",
    price: "1200"
  },
  {
    id: 5,
    name: "Kishi",
    image: "https://i.pinimg.com/736x/d4/47/13/d44713145ec9d9ba9e38f947a0404a55--ageing--s.jpg",
    brand: "ou",
    description: "Networking Opportunities",
    price: "800"
  },
  {
    id: 6,
    name: "Seiren X",
    image: "https://sritgroup.net/wp-content/uploads/2023/04/WhatsApp-Image-2023-04-07-at-18.46.36.jpeg",
    brand: "jntu",
    description: "Community Building",
    price: "871"
  },
  {
    id: 7,
    name: "Atheris",
    image: "https://mgit.ac.in/wp-content/uploads/2022/10/CYBER-SEC-POSTER.png",
    brand: "snist",
    description: "Resource Hub",
    price: "650"
  },
  {
    id: 1,
    name: "Razer Huntsman",
    image: "https://i.pinimg.com/736x/55/36/35/55363525f4601cd6a9eff0884ff59845--hackathon-open-source.jpg",
    brand: "mgit",
    description: "Time-Pressure Challenge",
    price: "200"
  },
  {
    id: 3,
    name: "Razer Basilisk",
    image: "https://i.pinimg.com/originals/fc/df/17/fcdf17404f0ad5a416a037d6032653b0.jpg",
    brand: "Mlrit",
    description: "Hands-On Learning",
    price: "280"
  },]

  return (

    <>

      <Navbar />

      <h1>Events</h1>
      <div className='events-div'>

        {productJSON.map(val => <Event name={val.description} img={val.image} brand={val.brand} />)}

        <AddButton />

      </div>
    </>

  )
}

export default Events