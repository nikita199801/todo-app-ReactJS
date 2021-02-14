import React, {useState, useEffect} from "react"
import {CSSTransition} from 'react-transition-group';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import "../styles/Plate.css"
import Dialog from "./Dialog"
import MyButton from "./MyButton"
import "../styles/Dashboard.css"
const http = require('http')
export default function Plate(props){
    const [canDelete, onDelete] = useState(!props.isDone)
    const [isShow, onDialogShow] = useState(false)

    function deleteTodo(dataToDelete){
        let post_options = {
          host: '127.0.0.1',
          port: '5000',
          path: '/delete',
          method: 'POST',
        //   headers: {
        //       'Content-Type': 'application/x-www-form-urlencoded'
        //   }
        };
        const req = http.request(post_options,(req, res) => {
        })
        req.write(JSON.stringify(dataToDelete))
        req.end()
      }

    return(
        <div className="plate">
            {(canDelete) ? 
            <CSSTransition in={canDelete} timeout={200} classNames="text-transition">
                <span className="plate-text-content">{props.todoData.title}</span>
            </CSSTransition>
            : <span className="plate-text-content plate-text-content-done">{props.todoData.title}</span>}
            <span className="control-section">
                <Checkbox name="Done" defaultChecked = {props.isDone} onChange={()=>{onDelete(!canDelete)}}/>
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