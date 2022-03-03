import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { StoreRootState, AppDispatch } from '../redux/store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const UseAppDispatch = () => useDispatch<AppDispatch>();
export const UseAppSelector: TypedUseSelectorHook<StoreRootState> = useSelector;
