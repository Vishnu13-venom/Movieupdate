import React, { createContext, useEffect, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    home: [],
    watched: [],
}


export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    useEffect(() => {
        const data = localStorage.getItem("data");
        if (data) {
            console.log("Initial State Data: ", data)
            dispatch({ type: "DATA_RETRIEVED", payload: JSON.parse(data) });
        }

    }, [])

    useEffect(() => {
        console.log("DEBUG: State Changed: ", state);
        if ((state.home && state.home.length && state.home.length > 0) || (state.watched && state.watched.length && state.watched.length > 0))
            localStorage.setItem("data", JSON.stringify(state))
    }, [state]);


    const addMovieToHome = (movie) => {
        console.log("DEBUG: Adding Movie To Home: ", movie)
        const index = state.home.findIndex(m => m.imdbID === movie.imdbID);
        if (index === -1) dispatch({ type: "ADD_MOVIE_TO_HOME", payload: movie });
    };

    const addMovieToWatchlist = (movie) => {
        console.log("DEBUG: Adding Movie To Watchlist: ", movie);
        dispatch({ type: "ADD_MOVIE_TO_WATCHLIST", payload: movie });
    };

    const deleteMovieFromWatched = (movie) => {
        console.log("DEBUG: Movie Deleted: ", movie);
        const index = state.watched.findIndex(m => m.imdbID === movie.imdbID);
        console.log("DEBUG: INDEX : ", index);
        let newWatched = [...state.watched];
        newWatched.splice(index, 1);
        console.log("DEBUG: New Watched: ", newWatched)
        dispatch({ type: "UPDATE_WATCHED", payload: newWatched });
    }

    const addMovieToWatched = (movie) => {
        console.log("DEBUG: Add To Watched: ", movie);
        const newWatched = [...state.watched, movie];
        const index = state.home.findIndex(m => m.imdbID === movie.imdbID);
        const newHome = [...state.home];
        newHome.splice(index, 1);
        dispatch({ type: "UPDATE_STATE", payload: { home: newHome, watched: newWatched } });

    }


    return (<GlobalContext.Provider value={{
        home: state.home,
        watched: state.watched,
        addMovieToWatchlist,
        addMovieToHome,
        addMovieToWatched,
        deleteMovieFromWatched
    }}>
        {props.children}
    </GlobalContext.Provider>)
    //     <GlobalContext.Provider value={{
    //         home: state.home,
    //         watched: state.watched,
    //         addMovieToWatchlist
    //     }}>
    //         {props.childern}
    //     </GlobalContext.Provider>
    // )
};