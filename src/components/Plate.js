import React, {useState, useEffect} from "react"
import {CSSTransition} from 'react-transition-group';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import "../styles/Plate.css"
import MyButton from "./MyButton"
export default function Plate(props){
    const [canDelete, onDelete] = useState(!props.isDone)
    return(
        <div className="plate">
            {(canDelete) ? 
            <CSSTransition in={canDelete} timeout={200} classNames="text-transition">
                <span className="plate-text-content">{props.content}</span>
            </CSSTransition>
            : <span className="plate-text-content plate-text-content-done">{props.content}</span>}
            <span className="control-section">
                <Checkbox name="Done" defaultChecked = {props.isDone} onChange={()=>{onDelete(!canDelete)}}/>
                <button disabled = {canDelete}>Delete</button>
                <button onClick={props.openDialog}>Edit</button>
            </span>
        </div>       
    )
}