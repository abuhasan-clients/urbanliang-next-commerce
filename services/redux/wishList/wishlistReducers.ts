import { WISHLIST_ADD_ITEM, WISHLIST_REMOVE_ITEM, WISHLIST_RESET } from './wishlistType';

const initialState = {
    wishlistItems: []
};

export const wishlistReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case WISHLIST_ADD_ITEM:
            const item = action.payload;

            const existingItem: any = state.wishlistItems.find((x: any) => x.product === item.product);
            if (existingItem) {
                return {
                    ...state,
                    wishlistItems: state.wishlistItems.map((x: any) => (x.product === existingItem.product ? item : x))
                };
            } else {
                return { ...state, wishlistItems: [...state.wishlistItems, item] };
            }

        case WISHLIST_REMOVE_ITEM:
            return {
                ...state,
                wishlistItems: state.wishlistItems.filter((x: any) => x.product !== action.payload)
            };

        case WISHLIST_RESET:
            return {
                ...state,
                wishlistItems: []
            };

        default:
            return state;
    }
};
