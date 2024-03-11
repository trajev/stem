// import React, { useState } from "react";
import './App.css';
import { Login } from "./components/login-signup/Login";
import { Register } from "./components/login-signup/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/dashboard/Dashboard';
import Events from "./components/events/Events";
import Booking from "./components/bookings/Booking";

function App() {
  // const [currentForm, setCurrentForm] = useState('login');

  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  return (
    // <div className="App">
    //   {
    //     currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    //   }
    // </div>

    <div className="App">
      <div className='App-div'>
        <BrowserRouter >
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/events" element={<Events />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </BrowserRouter>
      </div>

    </div>

  );
}

export default App;
