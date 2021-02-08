import React from "react"
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import "../styles/Plate.css"
import MyButton from "./MyButton"

export default function Plate(props){
    return(
        <div className="plate">
            <span className="plate-text-content">
                {props.content}
            </span>
            <span className="control-section">
                <Checkbox name="Done" checked = {props.isDone}/>
                <button>Delete</button>
                <button>Edit</button>
            </span>
        </div>       
    )
}