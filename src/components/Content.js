import React from "react"
import Input from "./Input"
import Head from "./Head"

import "../styles/Content.css"

class Content extends React.Component { 
    render(){
        return(
            <div className="content">
                <Head />
            </div>
        )
    }
}

export default Content