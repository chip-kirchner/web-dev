import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./conditional-output";
import TodoList from "./todo/todo-list.js"

const Labs = () => {
    return(
    <>
        <h1>Labs</h1>
        <TodoList/>
        <ConditionalOutput/>
        <Styles/>
        <Classes/>
        <Link to="/hello">
            Hello
        </Link> |
        <Link to="/tuiter/home">
            Tuiter
        </Link>
    </>

)
};

export default Labs;