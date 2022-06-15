import React, {useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import '../styles/login.css'
import Slider from '../inc/slider';
import { destroyUser, getUser } from '../utils/auth';
import { getWatchlists } from '../utils/requests';

export const Home = () => {
  const navigate = useNavigate();
  const user = getUser();
  console.log("DEBUG: Loading Home");
  const [watchlists, setWatchlists] = useState([]);

  const handleLogout = () => {
    destroyUser();
    navigate("/")
  };

  useEffect(() => {
    async function getData() {
      const data = await getWatchlists(user);
      if (data) {
        setWatchlists(data);
        console.log("DEBUG: Watchlists: ", data)
      }
    };
    getData()
  }, [])
  return (
    <>
      <div className='wrap'>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">MoviesMis</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <button className="btn" style={{ color: "white" }} onClick={() => navigate("/CreateWatchlist")}>Create Watchlist</button>
                </li>
              </ul>
            </div>
            <button className="btn" style={{ color: "white" }} onClick={handleLogout}>Logout</button>
          </div>
        </nav>
        <Slider />
        <div className='heading'>
          <h2>My Watchlists</h2>
        </div>
        <div className="container mb-3">
          <div className="row">
            {
              <ul>
                {watchlists.map((w, index) => <li key={index}><Link 
                 key={index} to={`/Watchlist/${w.id}`}>{w.name}</Link></li>)}
              </ul>
            }
          </div>
        </div>
      </div>
    </>


  )
}
export default Home;