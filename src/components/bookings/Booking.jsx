import React from 'react'
import Navbar from '../Navbar'
import BookingCard from './Booking-card';

const Events = () => {

  const collegeJson = [{
    name: "ACE ENGINEERING COLLEGE",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.aceec.ac.in%2Fwp-content%2Fuploads%2F2020%2F12%2FACE-Engineering-CollegeA-Block-1109x500-1.jpg&f=1&nofb=1&ipt=cb0edb8257f497c0b95732fa33b42ab16a45b9d2e7d5def97e2ff18b284eaa3b&ipo=images ",
    price: 5000,
    capacity: 300,
    link:"https://www.aceec.ac.in/about-college/"
  },
  {
    name: "Sreenidhi Institute of Technology",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.bvbdidUlTfoSDGCqILQD1wHaC9%26pid%3DApi&f=1&ipt=5f673e19552b8e3b161e3d322eabbfd965a7da5a02a14b6adb96615d79d0fd22&ipo=images",
    price: 2500,
    capacity: 500,
    link:"https://www.sreenidhi.edu.in/about-snist/"
  },
  {
    name: "MLR Institute of Technology",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.static-collegedunia.com%2Fpublic%2Fcollege_data%2Fimages%2Fcampusimage%2F1547014435mlr-institute-of-technology-and-management-1.jpg&f=1&nofb=1&ipt=45b72fe3d0cf579bb963e61a8ffc35a22d16263c78a6e092a733afd0991e9fa6&ipo=imagesnt%2Fuploads%2F2022%2F04%2F1547110013php9bMjmq-768x512.jpeg&f=1&nofb=1&ipt=3d0a26fbacb482559a18d52a16480fc2295843a66653632b26cdbeb75d229bd8&ipo=images",
    price: 1000,
    capacity: 250,
    link:"https://www.mlrit.ac.in/about-us/"
  },
  {
    name: "Keeshav Memorial Institute of Technology",
    image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.static-collegedunia.com%2Fpublic%2Fcollege_data%2Fimages%2FappImage%2F13998_KMIT_APP.jpg&f=1&nofb=1&ipt=de57273e6894afedd32eafceb3f9f7ea5c14a521915b27891e3363806d844ed4&ipo=images",
    price: 1500,
    capacity: 400,
    link:"https://kmit.in/aboutus/aboutus.php"
  }
]

  return (

    <>
    
    <Navbar />

    <h1>Bookings</h1>

    <div className='bookings'>
      {collegeJson.map(val=><BookingCard name={val.name.toUpperCase()} image={val.image} price={val.price} capacity={val.capacity} link={val.link} /> )}  
    </div>
    
    </>

  )
}

export default Events