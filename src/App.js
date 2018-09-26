import React, { Component } from 'react';
import AnimalCatalogue from './components/AnimalCatalogue'
import Zoo from './components/Zoo'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      animals: [],
      zoo: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:3000/animals")
      .then(res => res.json())
      .then(allAnimals => {
        this.setState({animals: allAnimals})
      })
      .then(console.log(this.state.animals))
  }

  adoptAnimal = (animal) => {
    this.setState(prevState =>   {
      const newArr = prevState.animals.filter(ani => ani != animal)
      return {zoo: [...this.state.zoo, animal], animals: newArr}
    })
  }

  releaseAnimal = (animal) => {
    this.setState(prevState =>{
      const newArr = prevState.zoo.filter(ani => ani != animal)
      return {animals: [...[animal], ...this.state.animals], zoo: newArr}

    })
  }


  render() {
    return (
      <div className="App">

        <select name="choice">
          <option value="first">Animal Catalogue</option>
          <option value="second" >Zoo</option>
        </select>

        <AnimalCatalogue animals={this.state.animals} adoptAnimal={this.adoptAnimal}/>
        <Zoo zoo={this.state.zoo}
          releaseAnimal={this.releaseAnimal}/>

      </div>
    );
  }
}

export default App;
