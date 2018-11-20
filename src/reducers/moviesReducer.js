
const moviesReducerDefaultState = [];

export default (state = moviesReducerDefaultState, action) => {
    switch(action.type){
        case 'GET_MOVIES':
            return action.movies
        default:
            return state
    }
}