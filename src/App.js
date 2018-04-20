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
      ID: ID,
      Title: Title,
      Body
    }

    localStorage.setItem(ID, JSON.stringify(newIdea))

    this.setState({
      ideas : [...this.state.ideas, newIdea]
    })
  }

  deleteCard = (ID) => {
    localStorage.removeItem(ID)
    
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

  componentDidMount() {
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

  render() {
    return (
      <div className="App">
        <Input 
          addCard={this.addCard}
        />

        <CardDisplay 
          ideas={this.state.ideas}
          deleteCard={this.deleteCard}
        />
      </div>
    );
  }
}

export default App;
