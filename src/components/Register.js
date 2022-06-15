import React, { useState } from 'react'
// import logo from '../assets/logo1.png';
import { Link, useNavigate } from "react-router-dom";
import '../styles/login.css'
import { saveUser } from '../utils/auth';
import { register } from '../utils/requests';

function Register() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");
    const [error, setError] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password || !passwordRepeat)
            return setError("All the input fields should be filled...");

        if (password !== passwordRepeat) {
            return setError("Password and re enter password fields should be the same...");
        }
        const user = { email, password };
        const [success, message] = await register(user);
        if (!success) return setError(message);
        saveUser(user);
        navigate("/Home");
    }

    return (
        <div
            className="wrapper">
            <div className="header">
                <div className="logo">
                    <a href="/"> <img src={require('../assets/logo1.png')} alt="logo " /></a>
                </div>
            </div>
            <div className="login_body">
                <div className="login_box">
                    <h2>Register</h2>
                    <form>
                        <div className="input_wrap">
                            <input type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}></input>
                        </div>
                        <div className="input_wrap">
                            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)}></input>
                        </div>
                        <div className="input_wrap">
                            <input type="password" placeholder="Re-enter Password" onChange={e => setPasswordRepeat(e.target.value)}></input>
                        </div>
                        {error && <div>
                            <span style={{ color: "red" }}>{error}</span>
                        </div>}
                        <div className="input_wrap">
                            <button
                                onClick={(e) => handleSubmit(e)}
                            >Register</button>
                        </div>
                        <div className='support'>
                            <div className='remember' >
                                {/* <span><input type="checkbox"></input></span> */}
                                <span>Already Have An Account?</span><Link to="/" style={{ color: "red" }}>Login</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;