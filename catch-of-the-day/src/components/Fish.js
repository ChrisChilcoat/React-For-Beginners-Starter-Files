import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component {
  handleClick = () => {
    this.props.addToOrder(this.props.index);
  }
  render() {
    const {image, name, desc, price, status} = this.props.details;
    const isAvailable = status === 'available';
    return <li className="menu-fish">
      <img src={image} /><br/>
      <h3 className="">{name}</h3>
      <p>{desc}</p>
      <p>{formatPrice(price)}</p>
      <p>{status}</p>
      <button 
        disabled={!isAvailable}  
        onClick={this.handleClick}
      >
        {isAvailable ? 'Add to Order' : 'Sold Out'}
      </button>
    </li>;
  }
}

export default Fish;