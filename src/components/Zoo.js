import React, { Component } from 'react';
import AnimalCard from './AnimalCard'

class Zoo extends Component {
  render() {
    const {zoo} = this.props
    return (
      <div>
        <h2>My Zoo</h2>
        <div className="container row">
          {zoo.map(animal => {
            return <AnimalCard animalCard={animal} releaseAnimal={this.props.releaseAnimal}/>
          })}
        </div>
      </div>
    );
  }
}

export default Zoo;
