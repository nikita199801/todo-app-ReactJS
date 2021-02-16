import React from "react";
import { Container } from '@material-ui/core'
import MyButton from "./MyButton"
import Head from "./Head"
import Menu from "./Menu"
import Input from "./Input"
import Content from "./Content"

class Board extends React.Component{
    render(){
        return(    
            <>
                <Container maxWidth="lg">
                    <Menu/>
                    <Content>
                    </Content>
                </Container>
            </>
        )
    }
}

export default Board