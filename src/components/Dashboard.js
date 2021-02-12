import React, {useState, useEffect} from "react"
import Plate from "./Plate"
import data from "../todos.json";
import "../styles/Dashboard.css"
import Dialog from "./Dialog"
import Checkbox from '@material-ui/core/Checkbox';
export default class Dashboard extends React.Component{ 
    constructor(props){
        super(props)
        this.state = ({
            isDialogShow: false,
            isShow: false
        })
    }
    onDialogShow = () => {
        if (this.state.isShow) {
            this.setState({
                isShow: false
            })
        } else {
            this.setState({
                isShow: true
            })
        }
    }

    render(){
        const todos =this.props.todos.map((todo) =>{
            return (
                <Plate content={todo.title} isDone={todo.completed} key={todo.id} openDialog = {this.onDialogShow}/>
            )
        })
        return (
            <div className="workplace">
                {todos}
                {(this.state.isShow) ? <Dialog onClose={this.onDialogShow}/> : null}
            </div>
        )
        
    }
}