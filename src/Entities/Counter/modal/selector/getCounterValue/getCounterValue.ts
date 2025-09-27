import {createSelector} from "@reduxjs/toolkit";
import {getCounter} from "../getCounter/getCounter";
import {counterSchema} from "../../types/counterShcema";

export const getCounterValue = createSelector(
    getCounter,
    (counter:counterSchema) => counter.value
)