import React from "react";
import "../styles/Dialog.css"
import {Button, IconButton, MenuItem, FormControl, InputLabel, Select, ButtonGroup, Fab, NativeSelect, TextField} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import SaveIcon from '@material-ui/icons/Save';

const colors = [
  {
    id: 0,
    name: 'red' 
  },
  {
    id: 1,
    name:'green'
  },
  {
    id: 2,
    name:'blue'
  },
  {
    id: 3,
    name:'white'
  }
]
export default class Dialog extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      inputData: "",
      color:this.props.thisTodo.color
    })
  }

  inputHandler = (event) => {
    this.setState({
        inputData: event.target.value
    })
  }

  onColorChange = (color) =>{
    this.setState({
      color:color
    })
  }



  render(){
    const options = colors.map(color => {
      let colorName = color.name.charAt(0).toUpperCase()+color.name.slice(1)
      if(this.props.thisTodo.color === color.name){
        return(
          <option selected onClick = {()=>{this.setState({color:color.name})}}>{colorName}</option>
        )    
      } else {
        return(
          <option onClick = {()=>{this.setState({color:color.name})}}>{colorName}</option>
        )  
      }    
   })

    return (
      <div className="dialog">
        <div className="top-section">
          <div className="header">
            <h2>Edit ToDo</h2>
            <Fab 
            color="secondary" 
            size="small" 
            onClick={()=>{
              this.props.onClose()
            }}>
                <CloseIcon />
            </Fab>
          </div>
        </div>
        <div className="mid-section">
          <TextField autoFocus defaultValue={this.props.thisTodo.title} style ={{width: 350}} label="Edit here" onChange={this.inputHandler}></TextField>
        </div>
        <div className="bottom-section">

          <Button
          variant="contained"
          color="primary"
          size="medium"
          style = {{marginRight: 20, marginTop: 10}}
          startIcon={<SaveIcon />}
          onClick = {()=>{
            if (this.state.inputData !== ""){
              this.props.onEditHandler(this.props.thisTodo, this.state.inputData, this.state.color)
              this.props.updateContent()
              this.props.onClose()
            } else{
              this.props.onEditHandler(this.props.thisTodo, this.props.thisTodo.title, this.state.color)
              this.props.updateContent()
              // MODIFY LATER 
              this.props.onClose()
            }
            }}
          >{"Save"}</Button>

        <FormControl>
          <InputLabel>Color</InputLabel>
          <NativeSelect>{options}</NativeSelect>
        </FormControl>
        </div>
      </div>
    );
  }
}

