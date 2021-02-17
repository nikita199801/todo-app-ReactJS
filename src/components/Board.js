import React, { useState } from "react";
import { Container } from '@material-ui/core'
import MyButton from "./MyButton"
import Head from "./Head"
import Menu from "./Menu"
import Input from "./Input"
import Content from "./Content"

export default function Board(props){
    return(    
        <>
            <Container maxWidth="lg">
                <Menu/>
                <Content/>
            </Container>
        </>
    )
}