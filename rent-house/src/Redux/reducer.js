import * as types from "./actionTypes";

const initState = {
    loading: false,
    Houses: [],
    error: false
}


export const reducer = (state = initState, { type, payload }) => {
    switch (type) {
        case types.FETCH_HOUSE_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case types.FETCH_HOUSE_SUCCESS:
            return {
                ...state,
                loading: false,
                Houses: payload,
                error: false
            }
        case types.FETCH_HOUSE_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        case types.FAVOURITE_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            }
        case types.FAVOURITE_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false
            }
        case types.FAVOURITE_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}
