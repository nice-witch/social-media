import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App/App";
import {ThemeProvider} from "App/providers/themeProvider";
import './Shared/config/i18n';

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById("root")
)