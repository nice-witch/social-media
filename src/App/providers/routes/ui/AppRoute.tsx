import {Route, Routes} from "react-router-dom";
import React, {Suspense} from "react";
import {routeConfig} from "Shared/config/RouteConfig";

function AppRoute() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routeConfig).map(({path, element}) => (
                    <Route key={path} path={path} element={element} />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRoute;