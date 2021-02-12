import React from "react"
import Input from "./Input"
import Head from "./Head"
import Dashboard from "./Dashboard"
import todos from "../todos.json";
import "../styles/Content.css"
import fs from "fs";


class Content extends React.Component {
    constructor(props){
        super(props)
        this.state = ({
            data: todos 
        })
    } 

    addNewTodo = (data) => {
        let newTodo = {
            id: todos.length + 1,
            title: data,
            completed: false
        }

        let post_options = {
            host: '127.0.0.1',
            port: '80',
            path: '/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(post_data)
            }
        };
        
        const req = http.request("127.0.0.1:5000", (req, res)=>{
        })

        req.write(JSON.stringify(newTodo))

    }


    render(){
        return(
            <div className="content">
                <Head newTodoHandler = {this.addNewTodo}/>
                <Dashboard todos={this.state.data}/>
            </div>
        )
    }
}

export default Content