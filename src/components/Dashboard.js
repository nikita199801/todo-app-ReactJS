import React, {useState, useEffect} from "react"
import Plate from "./Plate"
import Checkbox from '@material-ui/core/Checkbox';
export default class Dashboard extends React.Component{ 
    constructor(props){
        super(props)
    }

    render(){
        const todos =this.props.todos.map((todo) =>{
            return (
                <Plate todoData={todo} key={todo.id} updateContent={this.props.updateContent}/>
            )
        })
        return (
            <div className="workplace">
                {todos}
            </div>
        )
        
    }
}