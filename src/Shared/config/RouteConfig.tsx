import {RouteProps} from "react-router-dom";
import {MainPage} from "Pages/MainPage";
import {AboutPage} from "Pages/AboutPage";
import {NotFoundPage} from "Pages/NotFoundPage";

enum Pages {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found',
}

export const pagesPath: Record<Pages, string> = {
    [Pages.MAIN]: '/',
    [Pages.ABOUT]: '/about',
    [Pages.NOT_FOUND]: '/*',
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
    [Pages.NOT_FOUND]: {
        path: pagesPath.not_found,
        element: <NotFoundPage />
    },
}