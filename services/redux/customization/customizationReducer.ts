import * as actionTypes from './actions';

interface InitialStateType {
    fontFamily: string;
    borderRadius: number;
    themeChange: any;
    dirChange: boolean;
    opened: boolean;
}

export const initialState: InitialStateType = {
    // isOpen: [], // for active default menu
    fontFamily: `'Roboto Slab', serif`,
    borderRadius: 12,
    themeChange: 'light',
    dirChange: false,
    opened: true
};

const customizationReducer = (state = initialState, action: any) => {
    let id;
    switch (action.type) {
        case actionTypes.MENU_OPEN:
            id = action.id;
            return {
                ...state,
                isOpen: [id]
            };
        case actionTypes.SET_MENU:
            return {
                ...state,
                opened: action.opened
            };
        case actionTypes.SET_FONT_FAMILY:
            return {
                ...state,
                fontFamily: action.fontFamily
            };
        case actionTypes.SET_BORDER_RADIUS:
            return {
                ...state,
                borderRadius: action.borderRadius
            };
        case actionTypes.SET_THEMING:
            return {
                ...state,
                themeChange: action.themeChange
            };
        case actionTypes.DIR_CHANGE:
            return {
                ...state,
                dirChange: action.dirChange
            };
        default:
            return state;
    }
};

export default customizationReducer;
