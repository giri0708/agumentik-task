import React from "react";
import {Route,BrowserRouter,Routes } from "react-router-dom";
import Home from "./home";
function Router() {
    return (
        <div>
            <BrowserRouter>
            <Routes>
                <Route path='*' Component={Home} />
                </Routes>
                </BrowserRouter>
        </div>
    )
}

export default Router;