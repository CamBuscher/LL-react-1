import React, { Component } from 'react';
import CardDisplay from './CardDisplay.js'
import './styles/App.css';
import Input from './Input.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      ideas: []
    }
  }

  addCard = (ID, Title, Body) => {
    let newIdea = {
      ID,
      Title,
      Body,
      qualityCount: 0,
      qualities: [
        'swill',
        'less shitty',
        'pretty good'
      ]
    }

    localStorage.setItem(ID, JSON.stringify(newIdea))

    this.setState({
      ideas : [...this.state.ideas, newIdea]
    })
  }

  matchStorage() {
    let storageKeys = Object.keys(localStorage)
    let storedIdeas = []
    storageKeys.forEach(key => {
      let stored = localStorage.getItem(key)
      let parsed = JSON.parse(stored)
      storedIdeas.push(parsed)
    })

    this.setState({
      ideas: storedIdeas
    })
  }

  deleteCard = (ID) => {
    localStorage.removeItem(ID)
    
    this.setState({
      ideas: this.state.ideas.filter(obj => obj.ID !== ID)
    })
  }

  upvoteIdea = (ID) => {
    let updatedIdea = this.state.ideas.find(idea => idea.ID === ID)
    if(updatedIdea.qualityCount < 2) {
      updatedIdea.qualityCount++

      localStorage.setItem(ID, JSON.stringify(updatedIdea))
    }
  }

  downvoteIdea = (ID) => {
    let updatedIdea = this.state.ideas.find(idea => idea.ID === ID)
    if (updatedIdea.qualityCount > 0) {
      updatedIdea.qualityCount--

      localStorage.setItem(ID, JSON.stringify(updatedIdea))
    }
  }

  componentDidMount() {
    this.matchStorage()
  }

  render() {
    return (
      <div className="App">
        <Input 
          addCard={this.addCard}
        />

        <CardDisplay 
          ideas={this.state.ideas}
          deleteCard={this.deleteCard}
          upvoteIdea={this.upvoteIdea}
          downvoteIdea={this.downvoteIdea}
        />
      </div>
    );
  }
}

export default App;
