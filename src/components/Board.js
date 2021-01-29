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
            text: "qwe"
        }
        this.handler = this.handler.bind(this)
    }

    handler(){ 
        if (this.state.isPressed){
            this.setState({
                isPressed : false,
                text: "qwe"
            })
        } else {
            this.setState({
                isPressed : true,
                text: "asd"
            })
        }
       
    }

    render(){
        return(    
            <Container maxWidth="lg">
                <Menu/>
                <Content>
                   <Input></Input>
                </Content>
                {/* <Greetings text = {this.state.text}/>
                <MyButton handler ={this.handler}/> */}
            </Container>
        )
    }
}

export default Board