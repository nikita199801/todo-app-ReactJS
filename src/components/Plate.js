import React, {useState, useEffect} from "react"
import {CSSTransition} from 'react-transition-group';
import Checkbox from '@material-ui/core/Checkbox';
import "../styles/Plate.css"
import Dialog from "./Dialog"
import "../styles/Dashboard.css"
import { colors } from "@material-ui/core";
const axios = require('axios')


export default function Plate(props){
    const [isFinished, onFinishHandler] = useState(props.todoData.completed)
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

      function editTodo(todoToSet, newData, color){
        todoToSet.completed = !isFinished
        if (newData !== ""){
            todoToSet.newTitle = newData
        }
        todoToSet.color = color
        // if (color){
        //     todoToSet.color = newData
        // }
        
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
            {(!isFinished) ? 
            <CSSTransition 
            in={isFinished} 
            timeout={200} 
            classNames="text-transition">
                <span className={props.todoData.color+" plate-text-content"}>{props.todoData.title}</span>
            </CSSTransition>
            : <span className={props.todoData.color+" plate-text-content plate-text-content-done"}>{props.todoData.title}</span>}

            <span className="control-section">
                <Checkbox 
                defaultChecked = {props.todoData.completed} 
                onChange={()=>{
                    onFinishHandler(!isFinished)
                    editTodo(props.todoData, props.todoData.title, props.todoData.color)}
                    }/>

                <button 
                disabled = {!isFinished} 
                onClick = {() => {
                    deleteTodo(props.todoData)
                    }}>Delete</button>


                <button 
                onClick={()=>{onDialogShow(true)}}>Edit</button>

                {(isShow) ? <Dialog
                onEditHandler = {editTodo} 
                thisTodo = {props.todoData}
                updateContent = {props.updateContent} 
                onClose={()=> {onDialogShow(false)
                }}/> : null}
            </span>
        </div>       
    )
}