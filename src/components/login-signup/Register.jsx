import React, { useState } from "react";
import '../../App.css';
import { Link, useNavigate } from "react-router-dom";

import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { app } from '../../firebase';
import './Login.css';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email, pass);
    }

    const handleSignUp = () => {
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, email, pass)
            .then(res => {
                console.log(res.user)
                navigate("/login");
            })
            .catch(
                err => { console.log(err) }
            )
    }

    return (
        <div className="login-div">
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name</label>
                    <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <label className="user">User
                        <select name="todos" className="filter-todo">
                            <option value="all">Student</option>
                            <option value="completed">Organisation</option>
                        </select>
                    </label>
                    <br />
                    <button type="submit" onClick={handleSignUp} >Sign up</button>
                </form>

                <br />

                <p> Already have an account? <Link to="/login" > Login here</Link> </p>
            </div>  
        </div>
    )
}
