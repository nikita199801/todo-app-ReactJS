import React from "react";
import "../styles/Dialog.css"
export default function Dialog(props) {
  return (
    <div class="dialog">
      <div class="top-section">
        <div class="header">
          <div>Title</div>
          <button onClick={props.onClose}>exit</button>
        </div>
      </div>
      <div class="mid-section">
        <input></input>
      </div>
      <div class="bottom-section">
        <button>Save Changes</button>
        <select>
          <option>Red</option>
          <option>Green</option>
        </select>
      </div>
    </div>
  );
}
