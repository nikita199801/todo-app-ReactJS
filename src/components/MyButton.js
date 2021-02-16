import React from "react";
import Button from '@material-ui/core/Button';
class MyButton extends React.Component{
    render(){
        return(
            <Button variant="contained" color="primary" onClick = {()=> {
                this.props.action()
                this.props.updateContent()
            }}>Create New Todo</Button>
        )
    }
}

export default MyButton