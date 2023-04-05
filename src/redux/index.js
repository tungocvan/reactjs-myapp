import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';

const rootReducer = {
    counter: counterReducer,
};

const store = configureStore({
    reducer: rootReducer,
});

export default store;
