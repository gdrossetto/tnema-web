const initState = {
    total: 0,
    watchList: [],
    config: {},
}

const Reducer = (state = initState, action) => {
    switch (action.type) {

        case "INCREASE_VALUE":
            return {
                ...state,
                total: action.total
            }

        case "ADD_MOVIE_WATCHLIST":
            return {
                ...state,
                watchList: state.watchList.concat(action.movie),
            }

        case "SET_CONFIG" :
            return {
                ...state,
                config: action.config,
            }

        default:
            return state
    }
}

export default Reducer
