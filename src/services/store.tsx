import { configureStore } from '@reduxjs/toolkit';
import { rouletteModel } from './roulette-model';
import { filmApi } from './film-api';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        roulette: rouletteModel.reducer,
        [filmApi.reducerPath]: filmApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(filmApi.middleware)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;