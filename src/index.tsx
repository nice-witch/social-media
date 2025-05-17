import {render} from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App/App";
import {ThemeProvider} from "App/providers/themeProvider";

render(
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById("root")
)