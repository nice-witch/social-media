import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import './index.scss'
import {MainPageAsync} from "./pages/mainPage/MainPage.async";
import {AboutPageAsync} from "./pages/aboutPage/AboutPage.async";


function App(){
    return (
        <div className='app'>
            <Link to="/">Главная</Link>
            <Link to="/about">О нас</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageAsync />} />
                    <Route path="/about" element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
)
}

export default App;

