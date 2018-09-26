import React, { Component } from 'react';
import AnimalCard from './AnimalCard'

class AnimalCatalogue extends Component {
  render() {
    const {animals, adoptAnimal} = this.props
    return (
      <div>
        <h2>Animal Catalogue</h2>

        <div className="container row">
          {animals.map(animal => {
            return <AnimalCard animalCard={animal} adoptAnimal={adoptAnimal}/>
          })}
        </div>
      </div>
    );
  }
}

export default AnimalCatalogue;
