import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './styles/index.scss'
import {MainPage} from "Pages/MainPage";
import {AboutPage} from "Pages/AboutPage";
import {classNames} from "Shared/lib/classNames/classNames";
import {useTheme} from "App/providers/themeProvider";


function App(){
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>toggle theme</button>
            <Link to="/public">Главная</Link>
            <Link to="/about">О нас</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
)
}

export default App;

