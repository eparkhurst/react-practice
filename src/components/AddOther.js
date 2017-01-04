import React, {Component} from "react"
import "./AddOther.css"

class AddOther extends Component{
  constructor(props){
    super(props)
    this.add = this.add.bind(this)
  }
  add(event){
    event.preventDefault()
    this.props.addCounter(this.refs.input.value)
    this.refs.input.value = ""
  }
  render(){
    return <div className="adder">
      <h1>Add Another Counter</h1>
      <form onSubmit={this.add}>
        <input type="name" placeholder="name" ref="input"/>
        <button type="submit">Add</button>
      </form>
    </div>
  }
}

export default AddOther
