import React from "react"
import Input from "./Input";
import MyButton from "./MyButton"
import { CSSTransition } from "react-transition-group";
import todos from "../todos.json";
import "../styles/Head.css"
const http = require('http')


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
                id: todos.length + 1,
                title: data,
                completed: false
            }
            
            let post_options = {
                host: '127.0.0.1',
                port: '5000',
                path: '/',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Content-Length': Buffer.byteLength(newTodo)
                }
            };
            
            const req = http.request(post_options, (req, res)=>{
            })
            req.write(JSON.stringify(newTodo))
            req.end()
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