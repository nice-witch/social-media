import {DeepPartial} from "@reduxjs/toolkit";
import {getCounterValue} from "Entities/Counter/modal/selector/getCounterValue/getCounterValue";
import {StateShcema} from "App/providers/storeProvider";

describe('getCounterValue.test', () => {
    test('should return the correct counter value', () => {
        const state: DeepPartial<StateShcema> = {
            counter: {value: 5},
        }

        expect(getCounterValue(state as StateShcema)).toEqual(5);
    })
})