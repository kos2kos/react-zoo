import React, { Component } from 'react';

class AnimalCard extends Component {
  render() {
    console.log("Permanet 🌮 for Eric");
    const {animalCard, adoptAnimal, releaseAnimal} = this.props
    return (
      <div className="animal-card">
        <h1>{animalCard.name}</h1>
        <img src={animalCard.img} alt= ""/>
          <h2>{animalCard.type}</h2>
          <h3>{animalCard.sex}</h3>
          {adoptAnimal
            ?
            <button onClick={() => adoptAnimal(animalCard)}>Adopt Me</button>
            :
            <button onClick={() => releaseAnimal(animalCard)}>Release Me</button>
          }
          <br/>
      </div>
    );
  }
}

export default AnimalCard
