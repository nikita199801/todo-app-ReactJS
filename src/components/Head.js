import React from "react"
import Input from "./Input";
import MyButton from "./MyButton"
import { CSSTransition } from "react-transition-group";
import todos from "../todos.json";
import "../styles/Head.css"

const http = require('http')
const axios = require('axios')

class Head extends React.Component {
    constructor(props){
        super(props)
        this.state=({
            todoString: ""
        })
    }

    inputHandler = (data) => {
        this.setState({
            todoString: data
         })
    }

    addNewTodo = (data) => {
        if (data !== ''){
            let newTodo = {
                id: '',
                title: data,
                completed: false,
                color: 'white'
            }
            axios({
                method: 'post',
                url :'http://localhost:5000/new',
                data: newTodo,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': Buffer.byteLength(newTodo)
                }
            })
        }
    }

    render(){
        return(
            <form className="head">
                <Input changeHandler = {this.inputHandler}/>
                <MyButton action={()=>{this.addNewTodo(this.state.todoString)}} updateContent = {this.props.updateContent}/>
            </form>
        )
    }
}

export default Head