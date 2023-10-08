import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Slot = {
    id: number;
    name: string;
    image: string;
    description?: string;
    url: string;
}
export type RouletteState = {
    dataArr: null | Array<Slot>;
    searchArr: null | any;
    isLoading: boolean;
    isFailed: boolean;
    error?: string | null | undefined;
}

const initialState: RouletteState = {
    dataArr: null,
    searchArr: null,
    isLoading: false,
    isFailed: false,
    error: null,
  };

export const rouletteModel = createSlice({
    name: 'roulette',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<Array<Slot> | null>) => {
            state.dataArr = action.payload;
        },
        setSearch: (state, action) => {
            state.searchArr = action.payload;
        },
        clearSearch: (state) => {
            state.searchArr = null;
        },
        clearData: (state) => {
            state.dataArr = null;
            state.isLoading = false;
            state.isFailed = false;
            state.error = null;
            state.searchArr = null;
        },
    }
});
export const { setData, setSearch, clearSearch, clearData } = rouletteModel.actions;
export default rouletteModel.reducer