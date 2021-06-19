import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish && fish.status === 'available';
    if (!fish) return null;
    if(!isAvailable) {
      return <li key={key}>
        Sorry, the fish is no longer available.
      </li>
    } 
    return <li key={key}>
      {count} lbs {fish.name}
      {formatPrice(count * fish.price)}
    </li>
  }
  render() {
    const orderIds = Object.keys(this.props.order);
    const { fishes, order } = this.props;

    const total = orderIds.reduce(
      function(total, key) {
        const fish = fishes[key];
        const count = order[key];
        const isAvailable = fish && fish.status === 'available';
        if (!isAvailable) return total;
        return total + (count * fish.price);
      }
    , 0);

    return (
      <div className="order">
        <h2>Order</h2>
        <ul className="order">
          {orderIds.map(this.renderOrder)}
          <strong>{formatPrice(total)}</strong>
        </ul>
      </div>
    )
  }
}

export default Order;