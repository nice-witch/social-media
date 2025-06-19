import {Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import {routeConfig} from "Shared/config/RouteConfig";
import {LoaderPage} from "Widgets/LoaderPage";

function AppRoute() {

    return (
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => (
                    <Route key={path} path={path} element={(
                        <Suspense fallback={<LoaderPage />}>
                            <div className='pageWrapper'>
                                {element}
                            </div>
                        </Suspense>
                    )} />
                ))}
            </Routes>
    );
};

export default AppRoute;