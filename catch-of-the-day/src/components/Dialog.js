import React from 'react';

class Dialog extends React.Component {
  handleChange = (event) => {

  }
  render() {
    let baseStyle = {
      background: 'red', 
      display: 'none'};
    let toggleStyle = {display: 'block'};
    let style = {...baseStyle};

    if(this.props.isDialogVisable) {
      style = {...baseStyle, ...toggleStyle };
      console.log(style);
    } else {
      console.log(style);
    }

    return (
      <div className="AddFishForm" style={style}>
        Edit dialog
      </div>
    )
  }
}

export default Dialog;