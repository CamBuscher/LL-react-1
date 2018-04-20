import React, { Component } from 'react';
import './styles/Input.css'

class Input extends Component {
  constructor(props) {
    super()

    this.state = {
      userTitleValue: '',
      userBodyValue: ''
    }
  }

  updateTitle = (e) => {
    this.setState({
      userTitleValue: e.target.value
    })
  }

  updateBody = (e) => {
    this.setState({
      userBodyValue: e.target.value
    })
  }

  render() {
    return(
      <div className="inputArea">
        <h1>Linked List</h1>
        <form id="ideaJotter">
          <input 
            type="text" 
            className="userTitleInput"
            onChange={this.updateTitle}
            />
          <input 
            type="text" 
            className="userBodyInput" 
            onChange={this.updateBody}
            />
        </form>
        <button 
          form="ideaJotter"
          type="submit"
          onClick={(e) => {
            e.preventDefault();
            this.props.addCard(
              Date.now(), 
              this.state.userTitleValue, 
              this.state.userBodyValue
            )}
          }
          >Submit Idea</button>
      </div>
    )
  }
}

export default Input