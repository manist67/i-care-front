export const SET_TOKEN = "user/SET_TOKEN";
export const SET_SEQ = "user/SET_SEQ";
export const SET_NAME = "user/SET_NAME";
export const RESET = "user/reset";


export function reset() {
    return {
        type: RESET
    }
}

export function setToken(value) {
    return {
        type: SET_TOKEN,
        value
    }
}

export function setSeq(value) {
    return {
        type: SET_SEQ,
        value
    }
}

export function setName(value) {
    return {
        type: SET_NAME,
        value
    }
}