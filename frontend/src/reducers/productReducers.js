import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAILURE, PRODUCT_DELETE_REQUEST, PRODUCT_DELETE_SUCCESS, PRODUCT_DELETE_FAILURE, PRODUCT_CREATE_REQUEST, PRODUCT_CREATE_SUCCESS, PRODUCT_CREATE_FAILURE, PRODUCT_CREATE_RESET} from '../constants/productConstants';

export const productListReducer = (state = {products: []}, action) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return {loading: true, products: []};
            break;
        case PRODUCT_LIST_SUCCESS:
            return {loading: false, products: action.payload};
            break;
        case PRODUCT_LIST_FAILURE:
            return {loading: false, error: action.payload};
            break;
        default:
            return state;
            break;
    }
}

export const productDetailsReducer = (state = {product: {reviews: []}}, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {loading: true, ...state};
            break;
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload};
            break;
        case PRODUCT_DETAILS_FAILURE:
            return {loading: false, error: action.payload};
            break;
        default:
            return state;
            break;
    }
}

export const productDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_DELETE_REQUEST:
            return {loading: true};
            break;
        case PRODUCT_DELETE_SUCCESS:
            return {loading: false, success: true};
            break;
        case PRODUCT_DELETE_FAILURE:
            return {loading: false, error: action.payload};
            break;
        default:
            return state;
            break;
    }
}

export const productCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PRODUCT_CREATE_REQUEST:
            return {loading: true};
            break;
        case PRODUCT_CREATE_SUCCESS:
            return {loading: false, success:true, product: action.payload};
            break;
        case PRODUCT_CREATE_FAILURE:
            return {loading: false, error: action.payload};
            break;
        case PRODUCT_CREATE_RESET:
            return {};
            break;
        default:
            return state;
            break;
    }
}