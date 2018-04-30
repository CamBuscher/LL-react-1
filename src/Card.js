import React, { Component } from 'react'
import './styles/Card.css'

class Card extends Component {
  constructor(props) {
    super();

    this.state = {
      ID: props.ID,
      title: props.Title,
      body: props.Body,
      qualityCount: props.qualityCount,
      qualities: props.qualities
    }
  }

  upvoteIdea = () => {
    if(this.state.qualityCount < 2) {
      this.props.upvoteIdea(this.state.ID)
      this.setState({
        qualityCount : this.state.qualityCount + 1
      })
    }
  }

  downvoteIdea = () => {
    if(this.state.qualityCount > 0) {
      this.props.downvoteIdea(this.state.ID)
      this.setState({
        qualityCount : this.state.qualityCount - 1
      })
    }
  }

  render() {
    let quality = this.state.qualities[this.state.qualityCount]
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
        <button 
          onClick={(e) => {
            e.preventDefault()
            this.upvoteIdea()
          }}
        >Up</button>
        <span>{quality}</span>
        <button 
          onClick={(e) => {
            e.preventDefault()
            this.downvoteIdea()
          }}
        >Down</button>

      </div>
    )
  }
}

export default Card