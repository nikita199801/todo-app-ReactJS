import React from "react";
import { Container } from '@material-ui/core'
import MyButton from "./MyButton"
import Head from "./Head"
import Menu from "./Menu"
import Input from "./Input"
import Content from "./Content"
import Greetings from "../Greetings";

class Board extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            isPressed: false,
        }
    }

    render(){
        return(    
            <Container maxWidth="lg">
                <Menu/>
                <Content/>
            </Container>
        )
    }
}

export default Board