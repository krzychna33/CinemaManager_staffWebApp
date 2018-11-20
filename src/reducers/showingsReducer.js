
const showingsReducerDefaultState = [];

export default (state = showingsReducerDefaultState, action) => {
    switch(action.type){
        case 'GET_SHOWINGS':
            return action.showings;
        default: 
            return state;
    }
}