import { SET_TOKEN, SET_NAME, SET_SEQ, RESET } from '../actions';

const INITIAL_STATE = {
    token: null,
    seq: null,
    name: null,
}

function UserReducer( state = INITIAL_STATE, action ) {
    const newState = Object.assign({}, state);
    console.log("action", action);

    switch(action.type) {
        case SET_TOKEN:
            newState.token = action.value;
            break;
        case SET_SEQ:
            newState.seq = action.value;
            break;
        case SET_NAME:
            newState.name = action.value;
            break;
        case RESET:
            return INITIAL_STATE;
        default:
            break;
    }

    return newState;
}

export default UserReducer;