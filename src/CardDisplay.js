import React, { Component } from 'react';
import Card from './Card'
import './styles/CardDisplay.css'

const CardDisplay = (props) => {
  let cards = props.ideas.map(idea => {
    return <Card
      key={idea.ID}
      ID={idea.ID}
      Title={idea.Title}
      Body={idea.Body}
      qualities={idea.qualities}
      qualityCount={idea.qualityCount}
      deleteCard={props.deleteCard}
      upvoteIdea={props.upvoteIdea}
      downvoteIdea={props.downvoteIdea}
    />
  })

  return (
    <div className="cardDisplay">
      {cards}
    </div>
  )
}

export default CardDisplay;