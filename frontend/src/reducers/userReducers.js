import {USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE, USER_LOGOUT, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_REGISTER_FAILURE, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_FAILURE, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_SUCCESS, USER_UPDATE_PROFILE_FAILURE} from '../constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {loading: true};
            break;
        case USER_LOGIN_SUCCESS:
            return {loading: false, userInfo: action.payload};
            break;
        case USER_LOGIN_FAILURE:
            return {loading: false, error: action.payload};
            break;
        case USER_LOGOUT:
            return {};
            break;
        default:
            return state;
            break;
    }
}

export const userRegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_REGISTER_REQUEST:
            return {loading: true};
            break;
        case USER_REGISTER_SUCCESS:
            return {loading: false, userInfo: action.payload};
            break;
        case USER_REGISTER_FAILURE:
            return {loading: false, error: action.payload};
            break;
        default:
            return state;
            break;
    }
}

export const userDetailsReducer = (state = {user: {}}, action) => {
    switch (action.type) {
        case USER_DETAILS_REQUEST:
            return {...state, loading: true};
            break;
        case USER_DETAILS_SUCCESS:
            return {loading: false, user: action.payload};
            break;
        case USER_DETAILS_FAILURE:
            return {loading: false, error: action.payload};
            break;
        default:
            return state;
            break;
    }
}

export const userUpdateProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case USER_UPDATE_PROFILE_REQUEST:
            return {...state, loading: true};
            break;
        case USER_UPDATE_PROFILE_SUCCESS:
            return {loading: false, success: true, userInfo: action.payload};
            break;
        case USER_UPDATE_PROFILE_FAILURE:
            return {loading: false, error: action.payload};
            break;
        default:
            return state;
            break;
    }
}