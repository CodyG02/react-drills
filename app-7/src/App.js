import React, {Component} from 'react';
import './App.css';
import NewTask from './components/NewTask'
import List from './components/List'

class App extends Component{
  constructor() {
    super()

    this.state = {
      myList: []
    }

    this.handleChangeTask = this.handleChangeTask.bind(this)
  }

  handleChangeTask(task){
    this.setState({myList: [...this.state.myList, task]})
  }

  render() {
    return (
      <div className='App'>
        <h1>Proactive To-Do List</h1>
        <NewTask do={this.handleChangeTask}/>
        <List chores={this.state.myList}/>
      </div>
    )
  }

}

export default App;
