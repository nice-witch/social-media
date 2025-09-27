import {getCounter} from "./getCounter";
import {DeepPartial} from "@reduxjs/toolkit";
import {StateShcema} from "App/providers/storeProvider";

describe('getCounter', () => {
    test('should return the correct counter', () => {
        const state: DeepPartial<StateShcema> = {
            counter: {value: 5},
        }

        expect(getCounter(state as StateShcema)).toEqual({value: 5});
    })
})