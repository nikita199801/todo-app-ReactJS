import React, {useState, useEffect} from "react"
import {CSSTransition} from 'react-transition-group';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import "../styles/Plate.css"
import Dialog from "./Dialog"
import MyButton from "./MyButton"
import "../styles/Dashboard.css"
const axios = require('axios')
export default function Plate(props){
    const [canDelete, onDeleteHandeler] = useState(!props.isDone)
    const [isShow, onDialogShow] = useState(false)

    function deleteTodo(dataToDelete){
        axios({
            method: 'post',
            url :'http://localhost:5000/delete',
            data: dataToDelete,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(dataToDelete)
            }
        })
        .then(res => console.log(res))
      }

    return(
        <div className="plate">
            {(canDelete) ? 
            <CSSTransition in={canDelete} timeout={200} classNames="text-transition">
                <span className="plate-text-content">{props.todoData.title} ID::: {props.todoData.id}</span>
            </CSSTransition>
            : <span className="plate-text-content plate-text-content-done">{props.todoData.title} ID::: {props.todoData.id}</span>}
            <span className="control-section">
                <Checkbox name="Done" defaultChecked = {props.isDone} onChange={()=>{onDeleteHandeler(!canDelete)}}/>
                <button disabled = {canDelete} onClick = {() => {deleteTodo(props.todoData)}}>Delete</button>
                <button onClick={()=>{onDialogShow(true)}}>Edit</button>
                {(isShow) ? <Dialog 
                thisTodo = {props.todoData} 
                onClose={()=> {onDialogShow(false)}}    
                /> : null}
            </span>
        </div>       
    )
}