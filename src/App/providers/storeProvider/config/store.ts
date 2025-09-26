import {configureStore} from "@reduxjs/toolkit";
import {StateShcema} from "App/providers/storeProvider/config/StateShcema";

export function creatReduxStore(initialState?: StateShcema) {
    return configureStore<StateShcema>({
        reducer: {},
        devTools: __IS_DEV__
    });
}