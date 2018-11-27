import isEmpty from 'lodash/isEmpty';

const authReducerDefaultState = {
    isAuthenticated: false,
    user: {}
};

export default (state = authReducerDefaultState, action) => {
    switch (action.type){
        case 'SET_USER': {
            return {
                isAuthenticated: !isEmpty(action.user),
                user: action.user
            }
        }
        default:
            return state;
    }
}