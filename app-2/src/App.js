import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()

    this.state = {
      phrase: ['react','is','blowing','my','mind','in','a','bad','way']
    }
    this.displayPhrase = this.displayPhrase.bind(this)
  }
      displayPhrase(){
        let display = this.state.phrase.map((e, i) => {
          return <h2 key ={i}>{e}</h2>
        })
        return display

  }
  render(){
  return(
    <div className='App'>
      {this.displayPhrase()}
    </div>
    )
  }
}

export default App;
