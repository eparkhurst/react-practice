import React, { Component } from 'react'
import './Other.css'

class Other extends Component{
  constructor(){
    super()
    this.onChange = this.onChange.bind(this)
    this.remove = this.remove.bind(this)
  }
  onChange(){
    this.props.addNum(this.props.index)
  }
  remove(){
    console.log("hit");
    this.props.removeOther(this.props.index)
  }
  render(){
    return <div className="other">
      <div onClick={this.remove} className="x">X</div>
      <h1>{this.props.name}</h1>
      <h2>{this.props.name} has been clicked {this.props.number} times</h2>
      <button onClick={this.onChange}>Add One</button>
    </div>
  }
}

export default Other
