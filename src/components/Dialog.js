import React from "react";
import "../styles/Dialog.css"
const http = require('http')
const axios = require('axios')

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
            <div>{this.props.thisTodo.title}</div>
            <button onClick={this.props.onClose}>exit</button>
          </div>
        </div>
        <div className="mid-section">
          <input className ="edit-input" onChange={this.inputHandler}></input>
        </div>
        <div className="bottom-section">

          <button onClick = {()=>{
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
            }}>Save Changes</button>

          <select >
            {options}
          </select>
        </div>
      </div>
    );
  }
}

