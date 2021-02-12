import React from "react"
import Input from "./Input"
import Head from "./Head"
import Dashboard from "./Dashboard"
import todos from "../todos.json";
import "../styles/Content.css"
const http = require('http')


class Content extends React.Component {
    constructor(props){
        super(props)
        this.state = ({
            data: todos 
        })
    } 

    render(){
        return(
            <div className="content">
                <Head/>
                <Dashboard todos={this.state.data}/>
            </div>
        )
    }
}

export default Content