import { PRODUCT_REQUEST_FAILURE, PRODUCT_REQUEST_PENDING, PRODUCT_REQUEST_SUCCESS } from "./actionTypes"

const initialState = {
    isLoading: false,
    isError: false,
    total: "",
    destinations: [],
    reviews: []
}

export const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case PRODUCT_REQUEST_PENDING: {
            return { ...state, isLoading: true }
        } case PRODUCT_REQUEST_SUCCESS: {
            return { ...state, isLoading: false,total:payload.total, destinations: payload.data }
        } case PRODUCT_REQUEST_FAILURE: {
            return { ...state, isError: true }
        }default:
            return state
    }
}