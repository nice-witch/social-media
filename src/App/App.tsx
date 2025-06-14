import './styles/index.scss'
import {classNames} from "Shared/lib/classNames/classNames";
import {useTheme} from "App/providers/themeProvider";
import {AppRoute} from "App/providers/routes";
import {Navbar} from "Widgets/Navbar";

function App(){
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <AppRoute />
        </div>
)
}

export default App;

