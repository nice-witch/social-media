import {ReactNode} from "react";
import {render} from "@testing-library/react";
import i18nForTests from "Shared/config/i18n/i18nForTests";
import {I18nextProvider} from "react-i18next";
import {MemoryRouter} from "react-router-dom";

export interface RenderComponentOptions {
    router?: string
}

export function RenderComponent(component: ReactNode, options:RenderComponentOptions = {}) {
    const { router = '/' } = options;

    return render(
        <MemoryRouter initialEntries={[router]}>
            <I18nextProvider i18n={i18nForTests}>
                {component}
            </I18nextProvider>
        </MemoryRouter>
    )
}