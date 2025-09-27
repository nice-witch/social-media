import {ReactNode} from "react";
import {Provider} from "react-redux";
import {creatReduxStore} from "App/providers/storeProvider";
import {StateShcema} from "../config/StateShcema";

interface storeProviderProps {
    children: ReactNode;
    initialState?: StateShcema;
}

export const StoreProvider = (props: storeProviderProps) => {
    const {children, initialState} = props;

    const store = creatReduxStore(initialState)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};