import React from "react"
import Head from "./Head"
import Dashboard from "./Dashboard"
import "../styles/Content.css"
const axios = require('axios')

class Content extends React.Component {
    constructor(props){
        super(props)
        this.state = ({
            data : []
        })
    } 
    
    update = () =>{
        axios.get('http://localhost:5000/todo?action=read')
        .then(res => {
            this.forceUpdate(()=>{
                console.log()
            })
            this.setState({
                data: res.data
            })
        })
    }

    componentWillMount(){
        axios.get('http://localhost:5000/todo?action=read')
        .then(res => {
            this.setState({
                data: res.data
            })
        })
    }

    
    
    shouldComponentUpdate(nextProps, nextState){
        if(!(this.state.data === nextState.data)){
            return true
        }
    }

    render(){
        return(
            <div className="content">
                <Head updateContent = {this.update}/>
                <Dashboard todos={this.state.data} updateContent = {this.update}/>
            </div>
        )
    }
}

export default Content