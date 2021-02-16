import React, {useState, useEffect} from "react"
import {CSSTransition} from 'react-transition-group';
import Checkbox from '@material-ui/core/Checkbox';
import "../styles/Plate.css"
import Dialog from "./Dialog"
import "../styles/Dashboard.css"
const axios = require('axios')


export default function Plate(props){
    const [isFinished, onFinishHandler] = useState(!props.isDone)
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
        .then(() => props.updateContent())
      }

      function setTaskStatus(todoToSet){
        todoToSet.completed = isFinished
        axios({
            method: 'post',
            url :'http://localhost:5000/edit',
            data: todoToSet,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Content-Length': Buffer.byteLength(todoToSet)
            }
        })
      }

    return(
        <div className="plate">
            {(isFinished) ? 
            <CSSTransition 
            in={isFinished} 
            timeout={200} 
            classNames="text-transition">
                <span className="plate-text-content">{props.todoData.title}</span>
            </CSSTransition>
            : <span className="plate-text-content plate-text-content-done">{props.todoData.title}</span>}

            <span className="control-section">
                <Checkbox 
                defaultChecked = {props.isDone} 
                onChange={()=>{
                    onFinishHandler(!isFinished)
                    setTaskStatus(props.todoData)}
                    }/>

                <button 
                disabled = {isFinished} 
                onClick = {() => {
                    deleteTodo(props.todoData)
                    }}>Delete</button>


                <button 
                onClick={()=>{onDialogShow(true)}}>Edit</button>

                {(isShow) ? <Dialog 
                thisTodo = {props.todoData}
                updateContent = {props.updateContent} 
                onClose={()=> {onDialogShow(false)
                }}/> : null}
            </span>
        </div>       
    )
}