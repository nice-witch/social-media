import {classNames} from "Shared/lib/classNames/classNames";
import {useTheme} from "App/providers/themeProvider";
import {AppRoute} from "App/providers/routes";
import {Navbar} from "Widgets/Navbar";
import {Sidebar} from "Widgets/Sidebar";

function App(){
    const {theme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className="contentPage">
                <Sidebar />
                <AppRoute />
            </div>
            <div id="modal-root"></div>
        </div>
)
}

export default App;

