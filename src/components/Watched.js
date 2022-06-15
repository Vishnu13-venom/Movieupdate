import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { FaWindowClose } from "react-icons/fa";
export const Watched = () => {
  const { watched, deleteMovieFromWatched } = useContext(GlobalContext);
  console.log("DEBUG: Watched: ", watched);
  return (
    <>
      <div className='watch-head'>
        <h1>My Watched List</h1>
      </div>
      <div className="container mb-3">
        <div className="row">
          {
            watched.map((value, index) => {
              return (
                <div className="col-md-3 my-3 mb-2" key={index}>
                  <div className="card" style={{ width: "17rem" }}>
                    <img src={!value.Poster ? "https://cdnimg.rg.ru/img/content/226/66/67/iStock-1314587620_d_850.jpg" : value.Poster} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <button
                        className='btn btn-outline-success my-1 btn-sm'
                        onClick={() => deleteMovieFromWatched(value)}

                      >

                        <FaWindowClose />
                      </button>
                      <h5 className="card-title">{value.Title}</h5>
                      <div className="card-text mb-2">Year: {value.Year}</div>

                    </div>
                  </div>

                </div>
              )
            })
          }
        </div>
      </div>

    </>
  )
}
export default Watched;