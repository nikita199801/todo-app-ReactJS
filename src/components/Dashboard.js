import React from "react"
import Plate from "./Plate"
import data from "../todos.json";
import "../styles/Dashboard.css"
import Checkbox from '@material-ui/core/Checkbox';
export default class Dashboard extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todos: data
        }
    }
    

    render(){
        const todos =this.state.todos.map((todo) =>{
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