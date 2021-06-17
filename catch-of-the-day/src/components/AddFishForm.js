import React from 'react';

class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (event) => {
    event.preventDefault();
    const fish = {
      name: this.nameRef.current.value, 
      price: parseFloat(this.priceRef.current.value), 
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value, 
    };  
    this.props.addFish(fish);
    event.target.reset();
  };
  render() {
    return (
      <div className="AddFishForm">
        Add Fish Form
        <form 
          className="fish-edit" 
          onSubmit={this.createFish}
        >
          <input name="name" ref={this.nameRef} type="text" placeholder="Name"/>
          <input name="price" ref={this.priceRef} type="text" placeholder="Price"/>
          <select name="status" ref={this.statusRef} type="text" placeholder="Status">
            <option value="available">Fresh!</option>
            <option value="unavailable">Sold Out!</option>
          </select>
          <textarea name="desc" ref={this.descRef} type="text" placeholder="desc"></textarea>
          <input name="image" ref={this.imageRef} type="text" placeholder="image"/>
          <button type="submit">Add Fish</button>
        </form>
      </div>
    )
  }
}

export default AddFishForm;