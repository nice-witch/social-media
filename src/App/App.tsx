import {Link} from 'react-router-dom';
import './styles/index.scss'
import {classNames} from "Shared/lib/classNames/classNames";
import {useTheme} from "App/providers/themeProvider";
import {AppRoute} from "App/providers/routes";


function App(){
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to="/">Главная</Link>
            <Link to="/about">О нас</Link>
            <AppRoute />
        </div>
)
}

export default App;

