import React from "react"
import Input from "./Input";
import MyButton from "./MyButton"
import { CSSTransition } from "react-transition-group";

import "../styles/Head.css"

class Head extends React.Component {
    constructor(props){
        super(props)
        this.state=({
            isVisble: false
        })
    }

    onShowHandler = ()=>{
        if (this.state.isVisble){
            this.setState({
                isVisble: false,
            })
        } else
        this.setState({
            isVisble: true
        })
    }

    render(){
        return(
            <form className="head">
                <Input isVisble={this.state.isVisble}/>
                <MyButton action={this.onShowHandler}/>
            </form>
        )
    }
}

export default Head