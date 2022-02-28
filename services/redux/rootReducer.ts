import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customization/customizationReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const rootReducer = combineReducers({
    customization: customizationReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
