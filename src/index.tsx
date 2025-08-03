import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App/App";
import {ThemeProvider} from "App/providers/themeProvider";
import {ErrorBoundary} from "App/providers/errorBoundaries";
import i18n from './Shared/config/i18n/i18n';
import { I18nextProvider } from 'react-i18next';
import {PageError} from "Pages/pageError";
import {Suspense} from "react";

render(
    <BrowserRouter>
        <ErrorBoundary fallback={<PageError />}>
            <I18nextProvider i18n={i18n}>
                <ThemeProvider>
                    <Suspense fallback={<div>Загрузка переводов...</div>}>
                        <App />
                    </Suspense>
                </ThemeProvider>
            </I18nextProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById("root")
)