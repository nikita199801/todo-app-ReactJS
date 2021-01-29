import './App.css';
import Board from "./components/Board";
import React from "react";

class App extends React.Component{
  render(){
    return(
      <div className="App">
        <Board/>
      </div>
    )
  }
}

export default App;
