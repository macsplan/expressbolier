import React, {Component} from 'react'

const PetList = (props) => {

  const animals = props.animals

  return (
        <div>
          {animals.map((animal, index) => {
            return (<div key={index}>
              <h3>{animal.name}</h3>
              <p>Type: {animal.type}</p>
              <p>Size: {animal.size}</p>
              <img src={animal.picture} />
            </div>)
            })
          }
        </div>
      )
}

export default PetList;
