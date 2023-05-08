import { GOTOHOME, LOGOUT, SETID, SIGNIN_FAILURE_ADMIN, SIGNIN_REQUEST_ADMIN, SIGNIN_SUCCESS_ADMIN } from "./actiontype"

const init = {
    admin: false,
    isLoading: false,
    isError: false,
    id:0
}
export const reducer = (state = init, { type, payload }) => {
    switch (type) {
        case SIGNIN_REQUEST_ADMIN:
            return { ...state, isLoading: true }
        case SIGNIN_SUCCESS_ADMIN:
            return { ...state, isLoading: false, admin: true }
        case SIGNIN_FAILURE_ADMIN:
            return { ...state, isLoading: false, isError: true }
            case LOGOUT:
                return {...state,isLoading:false,admin:false}
                case SETID:
                    return {...state,isLoading:false,admin:true,id:payload}
        default:
            return state
    }
}