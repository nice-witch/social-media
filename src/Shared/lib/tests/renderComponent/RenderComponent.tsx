import {ReactNode} from "react";
import {render} from "@testing-library/react";
import i18nForTests from "Shared/config/i18n/i18nForTests";
import {I18nextProvider} from "react-i18next";
import {MemoryRouter} from "react-router-dom";
import {StateShcema, StoreProvider} from "App/providers/storeProvider";
import {DeepPartial} from "@reduxjs/toolkit";

export interface RenderComponentOptions {
    router?: string
    initialState?: DeepPartial<StateShcema>
}

export function RenderComponent(component: ReactNode, options:RenderComponentOptions = {}) {
    const { router = '/', initialState } = options;

    return render(
        <StoreProvider initialState={initialState as StateShcema}>
            <MemoryRouter initialEntries={[router]}>
                <I18nextProvider i18n={i18nForTests}>
                    {component}
                </I18nextProvider>
            </MemoryRouter>
        </StoreProvider>
    )
}