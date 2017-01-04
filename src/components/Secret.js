import React,{Component} from "react"
import {Link} from "react-router"

class Secret extends Component{
  render(){
    return <div>
      <h1>This Shit is Secret</h1>
      <Link to="/">Main</Link>
     </div>
  }
}

export default Secret
