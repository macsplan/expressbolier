import React from 'react';
import Greeting from './Greeting';
import FeaturedDonut from './FeaturedDonut';
import animals from './animals';
import PetList from './PetList';

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
      <Greeting />
      <PetList animals={animals} />
      </div>
    )
  }
}


export default App;
