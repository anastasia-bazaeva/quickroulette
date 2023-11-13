import { createSlice } from '@reduxjs/toolkit';

export type RouletteState = {
    dataArr: Array<string>;
}

const initialState: RouletteState = {
    dataArr: [],
  };

export const rouletteModel = createSlice({
    name: 'roulette',
    initialState,
    reducers: {
        addSlot: (state, action) => {
            state.dataArr.push(action.payload);
        },
        removeSlot: (state, action) => {
            state.dataArr = state.dataArr.filter(item => item !== action.payload);
        },
        clearData: (state) => {
            state.dataArr = [];
        },

    }
});
export const { addSlot, removeSlot, clearData } = rouletteModel.actions;
export default rouletteModel.reducer