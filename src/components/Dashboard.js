import React, {useState, useEffect} from "react"
import Plate from "./Plate"
import Checkbox from '@material-ui/core/Checkbox';
export default class Dashboard extends React.Component{ 
    constructor(props){
        super(props)
        // this.state = ({
        //     isDialogShow: false,
        //     isShow: false
        // })
    }

    render(){
        const todos =this.props.todos.map((todo) =>{
            return (
                <Plate todoData={todo} isDone={todo.completed} key={todo.id} openDialog = {this.onDialogShow}/>
            )
        })
        return (
            <div className="workplace">
                {todos}
            </div>
        )
        
    }
}