import React, { useState } from "react";
import Dashboard from '../dashboard/Dashboard';
import '../../App.css';
import { Link, useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from '../../firebase';
import './Login.css';

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const handleLogin = () => {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, email, pass)
            .then(userData => {
                console.log(userData.user)
                navigate("/dashboard");
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className="login-div">
            <div className="auth-form-container">
                <h2>Login</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <br />
                    <button type="submit" onClick={() => handleLogin()}> Log In </button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}></button>
                <p> Don't have an account? <Link to="/" > Register here.</Link> </p>
            </div>
        </div>
    )
}