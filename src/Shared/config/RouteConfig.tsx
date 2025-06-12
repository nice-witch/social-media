import {RouteProps} from "react-router-dom";
import {MainPage} from "Pages/MainPage";
import {AboutPage} from "Pages/AboutPage";

enum Pages {
    MAIN = 'main',
    ABOUT = 'about',
}

const pagesPath: Record<Pages, string> = {
    [Pages.MAIN]: '/',
    [Pages.ABOUT]: '/about',
}

export const routeConfig: Record<Pages, RouteProps> = {
    [Pages.MAIN]: {
        path: pagesPath.main,
        element: <MainPage />
    },
    [Pages.ABOUT]: {
        path: pagesPath.about,
        element: <AboutPage />
    },
}