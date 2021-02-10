import React from "react"
import Plate from "./Plate"
import data from "../todos.json";
import "../styles/Dashboard.css"
import Checkbox from '@material-ui/core/Checkbox';
export default class Dashboard extends React.Component{ 
    render(){
        const todos =this.props.todos.map((todo) =>{
            return (
                <Plate content={todo.title} isDone={todo.completed} key={todo.id} />
            )
        })
        return (
            <div className="workplace">
                {todos}
            </div>
        )
        
    }
}