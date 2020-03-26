import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super()

    this.state = {
      filterString: '',
      phrase: ['react','is','blowing','my','mind','in','a','bad','way']
    }
    // this.displayPhrase = this.displayPhrase.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
  }

  handleUpdate(filter){
    this.setState({
      filterString: filter
    })
  }


  //     displayPhrase(){
  //       let display = this.state.phrase.map((e, i) => {
  //         return 
  //       })
  //       return display
  // }

  render(){
let filterPhrase = this.state.phrase.filter((e,i) =>{
  return e.includes(this.state.filterString)
})
.map((e,i) => {
  return <h2 key ={i}>{e}</h2>
})

  return(
    <div className='App'>
      <input onChange={event => this.handleUpdate(event.target.value)} placeholder='filter here'/>
      {filterPhrase}
      {/* {this.displayPhrase()} */}
    </div>
    )
  }
}

export default App;

