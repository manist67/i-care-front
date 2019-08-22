import { SET_TOKEN, SET_NAME, SET_SEQ } from '../actions';

const INITIAL_STATE = {
    token: null,
    seq: null,
    name: null,
}

function UserReducer( state = INITIAL_STATE, action ) {
    const newState = Object.assign({}, state);

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
        default:
            break;
    }

    return newState;
}

export default UserReducer;