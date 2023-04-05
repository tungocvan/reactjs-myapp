import { createSlice } from '@reduxjs/toolkit';
const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increase(state) {
            return state + 1;
        },
        decrease(state) {
            return state - 1;
        },
    },
});

// Extract the action creators object and the reducer
const { actions, reducer } = counterSlice;
// Extract and export each action creator by name
export const { increase, decrease } = actions;
// Export the reducer, either as a default or named export
export default reducer;
