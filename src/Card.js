import React, { Component } from 'react'
import './styles/Card.css'

class Card extends Component {
  constructor(props) {
    super();

    this.state = {
      ID: props.ID,
      title: props.Title,
      body: props.Body
    }
  }

  render() {
    return(
      <div className="card">
        <h3>{this.state.title}</h3>
        <hr />
        <p>{this.state.body}</p>
        <hr />
        <button
          onClick = {(e) => {
            e.preventDefault()
            this.props.deleteCard(this.state.ID)
          }} 
        >Delete</button>
      </div>
    )
  }
}

export default Card