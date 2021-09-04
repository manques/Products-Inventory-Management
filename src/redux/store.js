import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducer/user.reducer';
import productsReducer from './reducer/products-reducer';

export const store = configureStore({
    reducer: {
        user: userReducer,
        products: productsReducer
    }
});