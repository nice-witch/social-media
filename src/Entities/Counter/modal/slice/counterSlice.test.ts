import {DeepPartial} from "@reduxjs/toolkit";
import {counterActions, counterReducer} from "./counterSlice";
import {counterSchema} from "../types/counterShcema";


describe('counterSlice.test', () => {
    test('increment', () => {
        const state: counterSchema = {value: 5};

        expect(counterReducer(state, counterActions.increment)).toEqual({value: 6});
    })

    test('decrement', () => {
        const state: counterSchema = {value: 5};

        expect(counterReducer(state, counterActions.decrement)).toEqual({value: 4});
    })

    test('when value equal undefined', () => {
        const state: counterSchema = undefined;

        expect(counterReducer(state, counterActions.increment)).toEqual({value: 1});
    })
})