import React from "react"
import { Grid } from '@material-ui/core'
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'

import "../styles/Menu.css"
class Menu extends React.Component { 
    render(){
        return(
            <div className="menu">
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid container item lg spacing={3} justify="center" alignItems="center">
                    <p>MY-TODO-APP</p>
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default Menu