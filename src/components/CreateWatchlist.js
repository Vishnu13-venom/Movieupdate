import React, { useState } from 'react'
import {useNavigate } from "react-router-dom";
import '../styles/login.css'
import { getUser } from '../utils/auth';
import { createWatchlist } from '../utils/requests';

function CreateWatchlist() {
    const navigate = useNavigate();
    const user = getUser();
    const [name, setName] = useState("");
    const [isPrivate, setIsPrivate] = useState(false);
    const [error, setError] = useState("");

    const handleCreate = async e => {
        e.preventDefault();
        if (!name) return setError("Name field should be filled...");

        const watchlist = {
            name,
            private: isPrivate,
            email: user.email,
            list: []
        };
        console.log("DEBUG: Watchlist", watchlist)

        const [success, message] = await createWatchlist(watchlist);
        if (success) return navigate("/Home")
        setError(message);
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
                    <h2>Create Watchlist</h2>
                    <form>
                        <div className="input_wrap">
                            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}></input>
                        </div>
                        <div className='remember'>
                            <span><input type="checkbox" checked={isPrivate} onChange={e => setIsPrivate(!isPrivate)}></input></span>
                            <span style={{ color: "white" }}>Private</span>
                        </div>
                        {error && <div>
                            <span style={{ color: "red" }}>{error}</span>
                        </div>}
                        <div className="input_wrap">
                            <button
                                onClick={handleCreate}
                            >Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateWatchlist;