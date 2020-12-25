import {ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_FAILURE, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS, ORDER_DETAILS_FAILURE, ORDER_PAY_RESET, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS, ORDER_PAY_FAILURE, ORDER_LIST_MY_REQUEST, ORDER_LIST_MY_SUCCESS, ORDER_LIST_MY_FAILURE, ORDER_LIST_MY_RESET, ORDER_LIST_REQUEST, ORDER_LIST_SUCCESS, ORDER_LIST_FAILURE, ORDER_DELIVER_REQUEST, ORDER_DELIVER_SUCCESS, ORDER_DELIVER_FAILURE, ORDER_DELIVER_RESET} from '../constants/orderConstants';

export const orderCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_CREATE_REQUEST:
            return {loading: true};
            break;
        case ORDER_CREATE_SUCCESS:
            return {loading: false, success: true, order: action.payload};
            break;
        case ORDER_CREATE_FAILURE:
            return {loading: false, error: action.payload};
            break;
        default:
            return state;
            break;
    }
}

export const orderDetailsReducer = (state = {loading: true, orderItems: [], shippingAddress: {}}, action) => {
    switch (action.type) {
        case ORDER_DETAILS_REQUEST:
            return {...state, loading: true};
            break;
        case ORDER_DETAILS_SUCCESS:
            return {loading: false, order: action.payload};
            break;
        case ORDER_DETAILS_FAILURE:
            return {loading: false, error: action.payload};
            break;
        default:
            return state;
            break;
    }
}

export const orderPayReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_PAY_REQUEST:
            return {loading: true};
            break;
        case ORDER_PAY_SUCCESS:
            return {loading: false, success: true};
            break;
        case ORDER_PAY_FAILURE:
            return {loading: false, error: action.payload};
            break;
        case ORDER_PAY_RESET:
            return {}
            break;
        default:
            return state;
            break;
    }
}

export const orderDeliverReducer = (state = {}, action) => {
    switch (action.type) {
        case ORDER_DELIVER_REQUEST:
            return {loading: true};
            break;
        case ORDER_DELIVER_SUCCESS:
            return {loading: false, success: true};
            break;
        case ORDER_DELIVER_FAILURE:
            return {loading: false, error: action.payload};
            break;
        case ORDER_DELIVER_RESET:
            return {}
            break;
        default:
            return state;
            break;
    }
}

export const orderListMyReducer = (state = {orders: []}, action) => {
    switch (action.type) {
        case ORDER_LIST_MY_REQUEST:
            return {loading: true};
            break;
        case ORDER_LIST_MY_SUCCESS:
            return {loading: false, orders: action.payload};
            break;
        case ORDER_LIST_MY_FAILURE:
            return {loading: false, error: action.payload};
            break;
        case ORDER_LIST_MY_RESET:
            return {orders: []}
            break;
        default:
            return state;
            break;
    }
}


export const orderListReducer = (state = {orders: []}, action) => {
    switch (action.type) {
        case ORDER_LIST_REQUEST:
            return {loading: true};
            break;
        case ORDER_LIST_SUCCESS:
            return {loading: false, orders: action.payload};
            break;
        case ORDER_LIST_FAILURE:
            return {loading: false, error: action.payload};
            break;
        default:
            return state;
            break;
    }
}