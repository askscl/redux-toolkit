import {createSlice} from "@reduxjs/toolkit";

const counterStore = createSlice({
    name: 'counter',
    initialState: {
        count: 1,
        isCounterLoading: false,
        counterError: null
    },
    reducers: {
        increment(state) {
            state.count += 1;
        },
        decrement(state) {
            state.count -= 1;
        },
        incrementByAmount(state, action) {
            state.count += action.payload;
        }
    }
})

const { increment, decrement, incrementByAmount } = counterStore.actions;
const reducer = counterStore.reducer;

export { increment, decrement, incrementByAmount};
export default reducer;