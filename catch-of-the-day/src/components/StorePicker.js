import React from 'react';

class StorePicker extends React.Component {

  myInput = React.createRef();

  goToStore = (e) => {
    e.preventDefault();
    const storeName = this.myInput.current.value;
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <>
        <p>Ass</p>
        <form 
          className="store-selector" 
          onSubmit={this.goToStore}
          >
          <h2>Please Enter a Store</h2>
          <input 
            type="text" 
            ref={this.myInput} 
            required 
            placeholder="Sore Name" 
            defaultValue="xxx"
          />
          <button type="submit">Visit Store</button>
          <div></div>
        </form>
      </>
    )
  }
}

export default StorePicker;