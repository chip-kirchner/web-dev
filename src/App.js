import {BrowserRouter, Route, Routes} from "react-router-dom";

import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';

import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./components/tuiter";
import ExploreScreen from "./components/tuiter/explore-screen";
import HomeScreen from "./components/tuiter/home-screen";

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/hello" exact={true} element={<HelloWorld/>}/>
                    <Route path="/" exact={true} element={<Labs/>}/>
                    <Route path="/labs" exact={true} element={<Labs/>}/>
                    <Route path="/tuiter/" exact={true} element={<Tuiter/>}/>
                    <Route path="/tuiter/home" element={<HomeScreen/>}/>
                    <Route path="/tuiter/explore" element={<ExploreScreen/>}/>

                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
