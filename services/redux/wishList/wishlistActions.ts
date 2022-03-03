import axios from 'axios';
import { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM, WISHLIST_RESET } from './wishlistType';

export const addToWishlist = (id: string, quantity: any) => async (dispatch: any, getState: any) => {
    try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/products/${id}`);
        dispatch({
            type: WISHLIST_ADD_ITEM,
            payload: {
                product: data._id,
                name: data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                quantity
            }
        });
        localStorage.setItem('wishlistItems', JSON.stringify(getState().wishlist.wishlistItems));
    } catch (err) {
        console.error(err.message);
    }
};

export const removeWishlistItem = (id: string) => async (dispatch: any, getState: any) => {
    try {
        dispatch({
            type: WISHLIST_REMOVE_ITEM,
            payload: id
        });

        localStorage.setItem('wishlistItems', JSON.stringify(getState().wishlist.wishlistItems));
    } catch (err) {
        console.error(err.message);
    }
};

export const wishlistReset = () => (dispatch: any) => {
    try {
        dispatch({ type: WISHLIST_RESET });

        localStorage.removeItem('wishlistItems');
    } catch (err) {
        console.error(err.message);
    }
};
