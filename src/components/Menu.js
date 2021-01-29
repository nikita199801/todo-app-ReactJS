import React from "react"
import { Grid } from '@material-ui/core'
import {AppBar, Toolbar, IconButton, Typography, Button} from '@material-ui/core'
class Menu extends React.Component { 
    render(){
        return(
            <div>
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid container item xs={6} spacing={3} justify="center" alignItems="center">
                    <p>MY-TODO-APP</p>
                </Grid>
                <Grid container item xs={6} spacing={3} justify="center" alignItems="center">
                    <p>dsafadfasdgdfhter</p>
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default Menu