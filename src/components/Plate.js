import React, {useState, useEffect} from "react"
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import "../styles/Plate.css"
import MyButton from "./MyButton"
export default function Plate(props){
    const [canDelete, onDelete] = useState(!props.isDone)
    return(
        <div className="plate">
            <span className="plate-text-content">
                {props.content}
            </span>
            <span className="control-section">
                {/* <input type="checkbox" checked = {props.isDone}></input> */}
                <Checkbox name="Done" defaultChecked = {props.isDone} onChange={()=>{onDelete(!canDelete)}}/>
                <button disabled = {canDelete}>Delete</button>
                <button>Edit</button>
            </span>
        </div>       
    )
}