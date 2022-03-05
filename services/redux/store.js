import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

// ==============================|| REDUX - MAIN STORE ||============================== //
const userInfo = (valueName) => {
    if (typeof window !== 'undefined') {
        const getItem = localStorage.getItem(valueName);
        const results = getItem ? JSON.parse(localStorage.getItem(valueName)) : null;
        return results;
    }
};
const cartWishItems = (valueName) => {
    if (typeof window !== 'undefined') {
        const getItem = localStorage.getItem(valueName);
        const results = getItem ? JSON.parse(localStorage.getItem(valueName)) : [];
        return results;
    }
};

export const getUserInfo = userInfo('userInfo');
const cartItemsFromStorage = cartWishItems('cartItems');
const wishlistItemsFromStorage = cartWishItems('wishlistItems');
// const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {};
// const paymentMethodFromStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : '';

const middleware = [thunk];

const initial = {
    userLogin: { user: getUserInfo },
    cart: {
        cartItems: cartItemsFromStorage
        // shippingAddress: shippingAddressFromStorage,
        // paymentMethod: paymentMethodFromStorage
    },
    wishlist: {
        wishlistItems: wishlistItemsFromStorage
    }
};

const store = createStore(rootReducer, initial, composeWithDevTools(applyMiddleware(...middleware)));
const persister = 'Free';

export { store, persister };
