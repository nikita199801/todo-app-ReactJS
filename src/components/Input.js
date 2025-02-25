import React from "react"
import { TextField } from '@material-ui/core'
import { Fade } from '@material-ui/core'
import {CSSTransition} from "react-transition-group"

import "../styles/Input.css"

class Input extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            isActive: false,
            inputValue: ''
        }
    }

    animateInputField = () => {
        if (this.state.isActive){
            this.setState({
                isActive: false
            })
        } else {
            this.setState({
                isActive: true
            })
        } 
    }


    inputHandler = (event) => {
        this.setState({
            inputValue: event.target.value
        })
    }
    
    render(){
            return (
                <CSSTransition in={this.state.isActive} timeout={500} classNames="input-animation">
                    <input 
                    className = "main-input"
                    type="text" 
                    onMouseOver={this.animateInputField} 
                    onMouseOut={()=>{this.animateInputField()}}
                    onBlur={()=>{this.props.changeHandler(this.state.inputValue)}}
                    onChange={this.inputHandler} 
                    placeholder={(this.state.isActive) ? "Enter your TODO" : "Hover here"}></input>
                </CSSTransition>
            )
    }
}

export default Input