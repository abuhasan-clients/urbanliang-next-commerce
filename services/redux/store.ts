import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

// ==============================|| REDUX - MAIN STORE ||============================== //
const userInfo = (valueName: any) => {
    if (typeof window !== 'undefined') {
        const getItem = localStorage.getItem(valueName);
        const results = getItem ? JSON.parse(localStorage.getItem(valueName) || '{}') : null;
        return results;
    }
};
const cartWishItems = (valueName: any) => {
    if (typeof window !== 'undefined') {
        const getItem = localStorage.getItem(valueName);
        const results = getItem ? JSON.parse(localStorage.getItem(valueName) || '[]') : [];
        return results;
    }
};

const userInfoFromStorage = userInfo('userInfo');
const cartItemsFromStorage = cartWishItems('cartItems');
const wishlistItemsFromStorage = cartWishItems('wishlistItems');
// const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ? JSON.parse(localStorage.getItem('shippingAddress')) : {};
// const paymentMethodFromStorage = localStorage.getItem('paymentMethod') ? JSON.parse(localStorage.getItem('paymentMethod')) : '';

const middleware = [thunk];

type initialType = {
    userLogin: {
        user: any;
    };
    cart: any;
    wishlist: {
        wishlistItems: any;
    };
};
const initial: initialType = {
    userLogin: { user: userInfoFromStorage },
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

export type StoreRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persister };
