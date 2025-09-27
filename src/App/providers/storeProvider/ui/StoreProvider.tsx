import {ReactNode} from "react";
import {Provider} from "react-redux";
import {creatReduxStore} from "App/providers/storeProvider";
import {StateShcema} from "../config/StateShcema";
import { DeepPartial } from '@reduxjs/toolkit';

interface storeProviderProps {
    children: ReactNode;
    initialState?: DeepPartial<StateShcema>;
}

export const StoreProvider = (props: storeProviderProps) => {
    const {children, initialState} = props;

    const store = creatReduxStore(initialState as StateShcema)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};