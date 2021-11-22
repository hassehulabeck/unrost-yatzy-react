import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dies: [{
            value: null,
            isLocked: false,
        },
        {
            value: null,
            isLocked: false,
        },
        {
            value: null,
            isLocked: false,
        },
        {
            value: null,
            isLocked: false,
        },
        {
            value: null,
            isLocked: false,
        },
    ],
    upperSum: 0,
    bonus: 0,
    lowerSum: 0,
    sum: 0,
    roll: 2,
    scoresheet: [{
            name: "Ettor",
            value: null,
        },
        {
            name: "Tvåor",
            value: null,
        },
    ],
};

export const yatzySlice = createSlice({
    name: "yatzy",
    initialState,
    reducers: {
        roll: (state) => {
            state.dies.forEach((die) => {
                if (!die.isLocked) {
                    die.value = Math.ceil(Math.random() * 6);
                }
            });
        },
        notate: (state, action) => {
            state.scoresheet.forEach((item) => {
                if ((item.name = action.payload.name)) {
                    item.value = action.payload.value;
                }
            });
        },
        lock: (state, action) => {
            state.dies[action.payload].isLocked = !state.dies[action.payload].isLocked;
        },
    },
});

export const { roll, notate, lock } = yatzySlice.actions;
export const selectDice = (state) => state.yatzy.dies;
export const selectSum = (state) => state.yatzy.sum;
export const selectUpperSum = (state) => state.yatzy.upperSum;
export const selectLowerSum = (state) => state.yatzy.lowerSum;
export const selectBonus = (state) => state.yatzy.bonus;

export default yatzySlice.reducer;