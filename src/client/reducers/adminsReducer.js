import { FECTH_ADMINS } from '../actions';

const adminsReducer = (state = [], action) => {
    switch (action.type){
        case FECTH_ADMINS :
            return action.payload.data;
        default :
            return state;
    }
}

export default adminsReducer;