import React, { Component } from 'react';
import Card from './Card'
import './styles/CardDisplay.css'

const CardDisplay = (props) => {
  let cards = props.ideas.map((idea, index) => {
    return <Card
      key={index}
      ID={idea.ID}
      Title={idea.Title}
      Body={idea.Body}
      deleteCard={props.deleteCard}
    />
  })

  return (
    <div className="cardDisplay">
      {cards}
    </div>
  )
}

export default CardDisplay;