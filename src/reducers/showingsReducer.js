
const showingsReducerDefaultState = [];

export default (state = showingsReducerDefaultState, action) => {
    switch(action.type){
        case 'GET_SHOWINGS':
            return action.showings;
        case 'ADD_SHOWING': 
            return [
                ...state,
                action.showing
            ]
        default: 
            return state;
    }
}