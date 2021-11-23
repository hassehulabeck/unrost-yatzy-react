import { createSlice } from "@reduxjs/toolkit";
import { uppersums } from "./scoreFunctions";

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
    roll: 3,
    scoresheet: [{
            name: "Ettor",
            value: null,
            isUsed: false,
        },
        {
            name: "Tvåor",
            value: null,
            isUsed: false,
        },
        {
            name: "Treor",
            value: 4,
            isUsed: false,
        },
        {
            name: "Fyror",
            value: 4,
            isUsed: false,
        },
        {
            name: "Femmor",
            value: 4,
            isUsed: false,
        },
        {
            name: "Sexor",
            value: null,
            isUsed: false,
        },
        {
            name: "Summa",
            value: null,
        },
        {
            name: "Bonus",
            value: null,
        },
        {
            name: "Ett par",
            value: null,
        },
        {
            name: "Två par",
            value: null,
        },
        {
            name: "Tretal",
            value: null,
        },
        {
            name: "Fyrtal",
            value: null,
        },
        {
            name: "Liten stege",
            value: null,
        },
        {
            name: "Stor stege",
            value: null,
        },
        {
            name: "Kåk",
            value: null,
        },
        {
            name: "Chans",
            value: null,
        },
        {
            name: "Yatzy",
            value: null,
        },
        {
            name: "Summa",
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
            // Sum all of the upper possible fields.
            for (let i = 0; i < 6; i++) {
                if (!state.scoresheet[i].isUsed) {
                    state.scoresheet[i].value = uppersums(state.dies, i + 1);
                }
            }
            state.roll -= 1;
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
export const selectRoll = (state) => state.yatzy.roll;
export const selectUpperSum = (state) => state.yatzy.upperSum;
export const selectLowerSum = (state) => state.yatzy.lowerSum;
export const selectBonus = (state) => state.yatzy.bonus;
export const selectScoresheet = (state) => state.yatzy.scoresheet;

export default yatzySlice.reducer;