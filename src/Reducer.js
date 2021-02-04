
const initState = {
    total: 0,
    watchList: [],
  }
  
  const Reducer = (state = initState, action) => {
    switch (action.type){
    
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
          
        // you can have as many case statements as you need
          
        default: 
          return state
      }
  }
  
  export default Reducer