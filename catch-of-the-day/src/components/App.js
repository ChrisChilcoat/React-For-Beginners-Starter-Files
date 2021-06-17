import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import { object } from 'prop-types';

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };
  addFish = (fish) => {
    const fishes = {...this.state.fishes}
    fishes[`fish${Date.now()}`] = fish;
    this.setState({fishes})
  };
  addToOrder = (key) => {
    // 1. Take a copy of state
    const order = {...this.state.order}
    // 2. Either add to order, or update the number
    order[key] = order[key] + 1 || 1;
    // 3. Call setState to update state object
    this.setState({ order });
  };
  loadSampleFishes = () => {
    this.setState({fishes: sampleFishes});
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => 
              <Fish key={key} 
                    index={key}
                    details={this.state.fishes[key]}
                    addToOrder={this.addToOrder}     
              />
            )}
          
          </ul>
        </div>
        <Inventory 
          addFish={this.addFish} 
          loadSampleFishes={this.loadSampleFishes}   
       />
        <Order />
      </div>
    )
  }
}

export default App;