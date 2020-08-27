import { FETCH_USERS } from '../actions/index';

const userReducer = (state = [], action) => {
    switch (action.type){
        case FETCH_USERS :
            return action.payload.data;
        default : 
            return state;
    }
}

export default userReducer;