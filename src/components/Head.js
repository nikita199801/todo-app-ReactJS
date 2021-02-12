import React from "react"
import Input from "./Input";
import MyButton from "./MyButton"
import { CSSTransition } from "react-transition-group";
const http = require('http')

import "../styles/Head.css"

class Head extends React.Component {
    constructor(props){
        super(props)
        this.state=({
            isVisble: false,
            todoString: ""
        })
    }

    inputHandler = (data) => {
        this.setState({
            todoString: data
         })
    }

    render(){
        return(
            <form className="head">
                <Input isVisble={this.state.isVisble} changeHandler = {this.inputHandler}/>
                <MyButton action={()=>{this.props.newTodoHandler(this.state.todoString)}}/>
            </form>
        )
    }
}

export default Head