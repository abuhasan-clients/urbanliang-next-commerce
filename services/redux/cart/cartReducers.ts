import { CART_ADD_ITEM, CART_REMOVE_ITEM, CART_RESET, CART_SAVE_PAYMENT_METHOD, CART_SAVE_SHIPPING_ADDRESS } from './cartType';

const initialState = {
    cartItems: [],
    shippingAddress: {}
};

export const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload;

            const existingItem: any = state.cartItems.find((x: any) => x.product === item.product);
            if (existingItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x: any) => (x.product === existingItem.product ? item : x))
                };
            } else {
                return { ...state, cartItems: [...state.cartItems, item] };
            }

        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter((x: any) => x.product !== action.payload)
            };

        case CART_SAVE_SHIPPING_ADDRESS:
            return {
                ...state,
                shippingAddress: action.payload
            };
        case CART_SAVE_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload
            };
        case CART_RESET:
            return {
                ...state,
                cartItems: []
            };

        default:
            return state;
    }
};
