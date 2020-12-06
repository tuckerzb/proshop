import {PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAILURE, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_DETAILS_FAILURE} from '../constants/productConstants';

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

export const productDetailsReducer = (state = {products: {reviews: []}}, action) => {
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