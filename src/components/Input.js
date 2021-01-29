import React from "react"
import { TextField } from '@material-ui/core'
class Input extends React.Component { 
    render(){
        return(
            <div>
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </div>
        )
    }
}

export default Input