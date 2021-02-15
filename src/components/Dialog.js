import React from "react";
import "../styles/Dialog.css"
const http = require('http')
const axios = require('axios')
export default class Dialog extends React.Component{
  constructor(props){
    super(props)
    this.state = ({
      inputData: ""
    })
  }

  inputHandler = (event) => {
    this.setState({
        inputData: event.target.value
    })
}

  saveChanges = (dataToEdit, newData) => {
    dataToEdit.newTitle = newData

    axios({
      method: 'post',
      url :'http://localhost:5000/edit',
      data: dataToEdit,
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Content-Length': Buffer.byteLength(dataToEdit)
      }
  })
  .then(res => console.log(res))
  return false
  }

  render(){
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
              this.saveChanges(this.props.thisTodo, this.state.inputData)
              this.props.onClose()
            } else{
              // MODIFY LATER 
              this.props.onClose()
            }
            }}>Save Changes</button>
          <select>
            <option>Red</option>
            <option>Green</option>
          </select>
        </div>
      </div>
    );
  }
}

