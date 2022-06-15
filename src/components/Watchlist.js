import React, { useEffect } from 'react';
import { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { getWatchlist, updateWatchlist } from '../utils/requests';


export const WatchList = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    console.log("Param ID: ", id);
    const [watchlist, setWatchlist] = useState(null);

    useEffect(() => {
        async function getData() {
            const data = await getWatchlist(id);
            if (data) {
                setWatchlist(data);
                console.log("DATA: ", data)
            }
        }
        getData()
    }, []);


    const handleRemoveItem = async index => {
        const items = [...watchlist.list];
        items.splice(index, 1);
        const newWatchlist = { ...watchlist };
        newWatchlist.list = items;
        const success = await updateWatchlist(newWatchlist);
        if (success) {
            setWatchlist(newWatchlist);
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="btn" style={{ color: "white" }} to="/Home">Home</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
            <div className='watch-head'>
                <h3>{(watchlist && watchlist.name) ? watchlist.name : ""}</h3>
                <button type="button" rel="nonopener" className="btn btn-success btn-sm" onClick={() => navigate(`/Add/${id}`)}>Add to WatchList</button>

            </div>
            <div className="row my-2">
                {watchlist && watchlist.list && watchlist.list.map((value, index) => (
                    <div className="col-md-3 my-3 mb-2" key={index}>
                        <div className="card" style={{ width: "17rem" }}>
                            <img src={!value.Poster ? "https://cdnimg.rg.ru/img/content/226/66/67/iStock-1314587620_d_850.jpg" : value.Poster} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <button
                                    className='btn btn-outline-success my-1 btn-sm'
                                    onClick={() => handleRemoveItem(index)}

                                >

                                    <FaWindowClose />
                                </button>
                                <h5 className="card-title">{value.Title}</h5>
                                <div className="card-text mb-2">Year: {value.Year}</div>

                            </div>
                        </div>

                    </div>
                ))}

            </div>

        </>
    )
}
export default WatchList;