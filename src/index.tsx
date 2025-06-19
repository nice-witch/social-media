import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App/App";
import {ThemeProvider} from "App/providers/themeProvider";
import {ErrorBoundary} from "App/providers/errorBoundaries";
import './Shared/config/i18n';
import {PageError} from "Pages/pageError";
import {Suspense} from "react";

render(
    <BrowserRouter>
        <ErrorBoundary fallback={<Suspense fallback=""><PageError /></Suspense>}>
            <ThemeProvider>
                <App />
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>,
    document.getElementById("root")
)