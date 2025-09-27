import {configureStore} from "@reduxjs/toolkit";
import {StateShcema} from "App/providers/storeProvider/config/StateShcema";
import {counterReducer} from "Entities/Counter/modal/slice/counterSlice";

export function creatReduxStore(initialState?: StateShcema) {
    return configureStore<StateShcema>({
        reducer: {
            counter: counterReducer
        },
        devTools: __IS_DEV__
    });
}