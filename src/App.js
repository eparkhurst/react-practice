import React, { Component } from 'react';
import {Link} from 'react-router';
import logo from './logo.svg';
import Other from './components/Other'
import Adder from './components/AddOther'
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state={array:[{name:"One",clicks:0},{name:"Two",clicks:0}]}
    this.addNum = this.addNum.bind(this)
    this.addCounter = this.addCounter.bind(this)
    this.removeOther = this.removeOther.bind(this)
  }
  addNum(i){
    const oldState = this.state
    let newState = Object.assign({}, oldState ,oldState.array[i].clicks += 1)
    this.setState(newState)
  }
  addCounter(name){
    const oldState = this.state
    let newState = Object.assign({}, oldState ,oldState.array.push({name:name, clicks:0}))
    this.setState(newState)
  }
  removeOther(i){
    const oldState = this.state
    let newState = Object.assign({}, oldState ,oldState.array.splice(i,1))
    this.setState(newState)
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>My Counter</h2>
        </div>
        <h1 className="App-intro">
          Total Clicks:
          {
            this.state.array.reduce((p,c)=>{
              return p +c.clicks
            },0)
          }
        </h1>

        {this.state.array.map((e,i)=>{
          return <Other number={e.clicks} name={e.name} key={i} index={i} addNum={this.addNum} removeOther={this.removeOther}/>
        })}
        <Adder addCounter={this.addCounter}/>
        <Link to="/secret">Secret</Link>
      </div>
    );
  }
}

export default App;
