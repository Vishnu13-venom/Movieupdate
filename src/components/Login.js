import React, { useState } from 'react'
// import logo from '../assets/logo1.png';
import { Link, useNavigate } from "react-router-dom";
import '../styles/login.css'
import { saveUser } from '../utils/auth';
import { login } from '../utils/requests';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async e => {
    e.preventDefault();
    if (!email || !password) return setError("All the fields should be filled...");
    const user = { email, password }
    const [success, message] = await login(user);
    if (!success) return setError(message)

    saveUser(user);
    navigate("/Home")

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
          <h2>Sign In</h2>
          <form>
            <div className="input_wrap">
              <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}></input>
            </div>
            <div className="input_wrap">
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            {error && <div>
              <span style={{ color: "red" }}>{error}</span>
            </div>}
            <div className="input_wrap">
              <button
                onClick={handleLogin}
              >Sign In</button>
            </div>
            <div className='support'>
              <div className='remember' >
                {/* <span><input type="checkbox"></input></span> */}
                <span>Don't Have An Account?</span><Link to="/Register" style={{ color: "red" }}>Register</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;