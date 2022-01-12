import React from 'react'
import { Route, Routes } from "react-router-dom";
import InvalidUrl from '../components/shared/InvalidUrl';

/**
 * Create a Routes component with a series of Route components as children.
 * @param {Array} routes The list of routes to create. Each should be an object
 * with "path", "key", and "element" fields. 
 */
export function RenderRoutes({ routes }) {
    return (
        <Routes>
            {routes.map((route, i) => {
                return (
                    <Route
                        key={i}
                        path={route.path}
                        element={<route.element />}
                    >
                    </Route>
                )
            })}
            <Route
                path="/*"
                element={<InvalidUrl />}
            />
        </Routes>
    );
}
