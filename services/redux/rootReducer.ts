import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customization/customizationReducer';
import { productDetailsReducer, productListReducer } from './product/productReducers';
import { userActivationReducer, userLoginReducer, userRegisterReducer } from './user/userReducers';
import { cartReducer } from './cart/cartReducers';
import { wishlistReducer } from './wishList/wishlistReducers';

// ==============================|| COMBINE REDUCER ||============================== //

const rootReducer = combineReducers({
    customization: customizationReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    userActivation: userActivationReducer,
    productList: productListReducer,
    productDetails: productDetailsReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
