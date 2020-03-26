import React, {Component} from 'react'

class NewTask extends Component{
    constructor(){
        super()

        this.state = {
            newItem: ''
        }
        this.handlePlus = this.handlePlus.bind(this)
    }

    handleNewItemChange(val) {
        this.setState({newItem: val})
    }

    handlePlus(){
        this.props.do(this.state.newItem)
        this.setState({newItem: ''})
    }

    render(){
        return(
            <div>
                <input
                val={this.state.newItem}
                placeholder='Enter Responsibilities'
                onChange={e => this.handleNewItemChange(e.target.val)}
                />

                <button onClick={this.handlePlus}>Add</button>

            </div>
        )
    }

}

export default NewTask