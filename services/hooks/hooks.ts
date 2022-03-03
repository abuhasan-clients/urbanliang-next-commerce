import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from '../redux/store';

export type StoreRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const UseAppDispatch = () => useDispatch<AppDispatch>();
export const UseAppSelector: TypedUseSelectorHook<StoreRootState> = useSelector;
