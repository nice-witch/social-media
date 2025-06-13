import './styles/index.scss'
import {classNames} from "Shared/lib/classNames/classNames";
import {useTheme} from "App/providers/themeProvider";
import {AppRoute} from "App/providers/routes";
import {Navbar} from "Widgets/Navbar";

function App(){
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <button onClick={toggleTheme}>toggle theme</button>
            <AppRoute />
        </div>
)
}

export default App;

