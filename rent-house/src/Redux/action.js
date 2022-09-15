import * as types from "./actionTypes";
import axios from "axios";


const fetch_house_data_Request = () => ({
    type: types.FETCH_HOUSE_REQUEST
})

const fetch_house_data_Success = (payload) => ({
    type: types.FETCH_HOUSE_SUCCESS,
    payload
})

const fetch_house_data_Failure = () => ({
    type: types.FETCH_HOUSE_FAILURE
})

export const fetch_house_data = (Payload) => (dispatch) => {
    dispatch(fetch_house_data_Request());
    axios.get('https://real-estate-rent-house.herokuapp.com/rents', {
        params: {
            ...Payload
        }
    })
        .then((r) => dispatch(fetch_house_data_Success(r.data)))
        .catch((err) => dispatch(fetch_house_data_Failure(err.data)))

}


const patch_favourite_Request = () => ({
    type: types.FAVOURITE_REQUEST
})

const patch_favourite_Success = (payload) => ({
    type: types.FAVOURITE_SUCCESS,
    payload
})

const patch_favourite_Failure = () => ({
    type: types.FAVOURITE_FAILURE
})

export const patchFavourite = (id, redColor) => (dispatch) => {
    dispatch(patch_favourite_Request());
    axios.patch(`https://real-estate-rent-house.herokuapp.com/rents/${id}`,
        { heart: `${redColor}` }
    )
        .then((r) => dispatch(patch_favourite_Success(r.data)))
        //.then(() => dispatch(fetch_house_data()))
        .catch((e) => dispatch(patch_favourite_Failure(e.message)))
}