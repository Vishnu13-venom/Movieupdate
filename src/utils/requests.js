import axios from "axios";
const apiUrl = 'http://localhost:3005/';


async function userExists(email) {
    try {
        const response = await axios.get(`${apiUrl}users?email=${email}`);
        if (!response.data || response.data.length === 0)
            return false;
        return true;
    } catch (error) {
        console.log("ERROR: ", error);
        return false;
    }

}
export async function login(user) {
    try {
        const response = await axios.get(`${apiUrl}users?email=${user.email}`);
        console.log("INFO: Response: ", response);
        if (!response.data || response.data.length === 0)
            return [false, "Invalid Email or Password..."]
        const userDB = response.data[0];
        if (userDB.password !== user.password)
            return [false, "Invalid Password..."]

        return [true, ""];
    } catch (error) {
        console.log("ERROR: ", error);
        return [false, null];
    }

}

export async function register(user) {
    try {
        const exists = await userExists(user.email);
        if (exists) return [false, "User for email address already exists..."];
        await axios.post(`${apiUrl}users`, user);
        return [true, ""];
    } catch (error) {
        console.log("ERROR: ", error);
        return [false, null];
    }

}

export async function getWatchlists(user) {
    try {
        const response = await axios.get(`${apiUrl}watchlists`)
        console.log("Response: ", response)
        const data = response.data;
        return data.filter(w => w.private === false || w.email === user.email)
    } catch (error) {
        console.log("ERROR: ", error);
        return null;
    }
}

export async function getWatchlist(id) {
    try {
        const response = await axios.get(`${apiUrl}watchlists/${id}`)
        if (response.data.length === 0) return null
        return response.data;
    } catch (error) {
        console.log("ERROR: ", error);
        return null;
    }
}

export async function updateWatchlist(watchlist) {
    try {
        await axios.put(`${apiUrl}watchlists/${watchlist.id}`, watchlist);
        return true;
    } catch (error) {
        console.log("ERROR: ", error);
        return false;
    }

};

export async function createWatchlist(watchlist) {
    try {
        await axios.post(`${apiUrl}watchlists`, watchlist);
        return [true, ""]
    } catch (e) {
        console.log("ERROR:", e);
        return [false, "Create Watchlist Failed..."];
    }
};

export async function addMovieToWatchlist(id, movie) {
    try {
        const watchlist = await getWatchlist(id);
        if (!watchlist) return;
        const existingList = watchlist.list;
        const index = existingList.findIndex(i => i.imdbID === movie.imdbID);
        console.log("Index: ", index)
        if (index !== -1) return false

        const newWatchlist = { ...watchlist, list: [...watchlist.list, movie] };
        const updated = await updateWatchlist(newWatchlist);
        return updated;
    } catch (e) {
        console.log("ERROR:", e);
        return false;
    }
}