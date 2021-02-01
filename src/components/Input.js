import React from "react"
import { TextField } from '@material-ui/core'
import { Fade } from '@material-ui/core'

import "../styles/Input.css"

class Input extends React.Component {
    
    render(){
        if (this.props.isShow){
            return (
                <input type="text"></input>
            )
        } else {
            return(
                <p>{"Press button ------->"}</p>
            )
        }
    }
}

export default Input