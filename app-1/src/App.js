import React, {Component} from 'react'
import "./App.css";

class App extends Component{
  constructor(){
    super()

    this.state={
      message : ''
    }
    this.handleUpdate = this.handleUpdate.bind(this)
  }
  
handleUpdate(value){
  this.setState({
    message: value
  })
}

  render(){
    return (
      <div className='App'>
        <input onChange={event => this.handleUpdate(event.target.value)} placeholder='message'/>
        <p>{this.state.message}</p>
      </div>
    )
  }
}

export default App