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
            isVisble: false,
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
                id: todos[todos.length - 1].id + 1,
                title: data,
                completed: false
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
            .then(res => console.log(res))
        }
    }

    render(){
        return(
            <form className="head">
                <Input isVisble={this.state.isVisble} changeHandler = {this.inputHandler}/>
                <MyButton action={()=>{this.addNewTodo(this.state.todoString)}}/>
            </form>
        )
    }
}

export default Head