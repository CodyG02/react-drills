import React, {Component} from 'react';
import './App.css';
import Todo from './Todo.js'

class App extends Component{
  constructor(){
    super()

    this.state= {
      list: [],
      input: ''
      
    }

    this.handleAddTask = this.handleAddTask.bind(this)

  }

  handleInputChange(value){
    this.setState({input: value})
  }

  handleAddTask() {
    this.setState({list: [...this.state.list, this.state.input],
      input: ''
    })
  }

  render(){
    let list = this.state.list.map((e, i) =>{
      return <Todo key={i} task={e}/>
    })

    return(
      <div className='App'>
        <h1>My To-Do list</h1>

      <div>
        <input
        value={this.state.input}
        placeholder='New Task'
        onChange={e => this.handleInputChange(e.target.value)}
        />

        <button onClick={this.handleAddTask}>Add</button>

      </div>
{/* did we go over line breaks in class? are these common occurances and can you control how big of a gap it provides? */}
        <br/>

        {list}

      </div>
    )
  }

}

export default App;
