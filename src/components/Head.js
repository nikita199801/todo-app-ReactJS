import React from "react"
import Input from "./Input";
import MyButton from "./MyButton"
import { CSSTransition } from "react-transition-group";

import "../styles/Head.css"

class Head extends React.Component {
    constructor(props){
        super(props)
        this.state=({
            isShow: false
        })

        this.onShowHandler = this.onShowHandler.bind(this)
    }

    showInput(){
        this.setState({
            isShow: true
        })
    }

    hideInput(){
        this.setState({
            isShow: false
        })
    }

    onShowHandler(){
        if (this.state.isShow){
            this.hideInput()
        } else
            this.showInput()
    }

    render(){
        return(
            <div className="head">
                <CSSTransition>
                <Input isShow={this.state.isShow}/>
                </CSSTransition>
                <MyButton action={this.onShowHandler}/>
            </div>
        )
    }
}

export default Head