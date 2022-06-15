const AppReducer = (state, action) => {
    switch (action.type) {
        case "ADD_MOVIE_TO_HOME":
            return {
                ...state,
                home: [action.payload, ...state.home]
            }
        case "ADD_MOVIE_TO_WATCHLIST":
            return {
                ...state,
                watched: [action.payload, ...state.watched]
            }
        case "DATA_RETRIEVED":
            return { ...action.payload }
        case "UPDATE_WATCHED":
            return {
                home: [...state.home],
                watched: action.payload
            }
        case "UPDATE_STATE":
            return action.payload
        default:
            return state;
    }
};
export default AppReducer;
