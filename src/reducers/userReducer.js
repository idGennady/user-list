import {
    SET_USERS,
    GET_USER_BY_ID
} from '../actions/userAction';

const userReducer = (state = [], action) => {
    switch (action.type){

        case SET_USERS:
            return {
                ...state,
                users: action.users
            };

        case GET_USER_BY_ID:
            return {
                ...state,
                user: state.users.map(user => {
                    if(user.id === action.id){
                        return user;
                    }
                })
            };

        default: return state;
    }
};

export default userReducer;