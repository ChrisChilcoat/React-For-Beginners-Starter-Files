import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import base from '../base';
import Dialog from './Dialog';
import { object } from 'prop-types';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
    isDialogVisable: false,
  };
  componentDidMount() {
    const { params } = this.props.match;
    // 1. First reinstate our localstorage
    const localStorageRef = localStorage.getItem(params.storeid);
    if(localStorageRef) {
      this.setState({order: JSON.parse(localStorageRef)})
    }
    // 2. Sync with firebase
    this.ref = base.syncState(`${params.storeid}/fishes`, {
      context: this,
      state: 'fishes'
    });
  }
  componentDidUpdate() {
    const order = JSON.stringify(this.state.order);
    localStorage.setItem(this.props.match.params.storeid, order);
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  addFish = (fish) => {
    // 1. Take a copy of state
    const fishes = {...this.state.fishes}
    // 2. Add new fish
    fishes[`fish${Date.now()}`] = fish;
    // 3. Call setState to update state object
    this.setState({fishes})
  };
  updateFish = (key, updatedFish) => {
    // 1. Take a copy of state
    const fishes = {...this.state.fishes}
    // 2. Update that state
    fishes[key] = updatedFish;
    // 3. Set to state
    this.setState({fishes});
  };
  deleteFish = (key) => {

     

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
    // fetch sample fishes
    this.setState({fishes: sampleFishes});
  };
  render() {
    return (
      <div className="catch-of-the-day">
      <Dialog isDialogVisable={this.state.isDialogVisable} />
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
          updateFish={this.updateFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes={this.state.fishes}   
        />
        <Order
          fishes={this.state.fishes}
          order={this.state.order} 
        />
      </div>
    )
  }
}

export default App;