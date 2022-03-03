import {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL
} from './productType';

// GET ALL PRODUCTS
export const productListReducer = (state = { products: [] }, action: any) => {
    switch (action.type) {
        case PRODUCT_LIST_REQUEST:
            return { loading: true };
        case PRODUCT_LIST_SUCCESS:
            return {
                loading: false,
                error: null,
                products: action.payload.products,
                pages: action.payload.pages,
                page: action.payload.page
            };
        case PRODUCT_LIST_FAIL:
            return { error: action.payload };

        default:
            return state;
    }
};

// GET PRODUCT DETAILS BY ID
export const productDetailsReducer = (state = {}, action: any) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return { loading: true };
        case PRODUCT_DETAILS_SUCCESS:
            return { loading: false, error: null, product: action.payload };
        case PRODUCT_DETAILS_FAIL:
            return { error: action.payload };

        default:
            return state;
    }
};
