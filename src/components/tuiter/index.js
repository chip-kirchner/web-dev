import React from "react";
import {Link, BrowserRouter, Routes, Route} from "react-router-dom";
import ExploreScreen from "./explore-screen";
import HomeScreen from "./home-screen";

const Tuiter = () => {
    return(
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/tuiter/home" element={<HomeScreen/>}/>
                    <Route path="/tuiter/explore" element={<ExploreScreen/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    )
};

export default Tuiter;