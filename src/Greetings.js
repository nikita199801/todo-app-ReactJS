import React from "react"

class Greetings extends React.Component{
    // constructor(props){
    //     super(props)
    //     this.state = ({
    //         name: this.props.text
    //     })
    // }
    render(){
        return(
            <h1>Hi,{this.props.text}</h1>
        )
    }
    // constructor(props){
    //     super(props)
    //     this.state = {
    //         name: "nikita"
    //     }
    // }
 
    // render(){
    //     return(
    //         <h1>Hi, {this.props.isPressed}</h1>
    //     )
    // }
}

export default Greetings