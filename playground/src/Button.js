import React from 'react';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    // alert('Tee-hee that tickles');
    let count = this.props.count
    let newCount = count
    this.props.onChange(newCount)
  }

  render() {
    return (
      <button onClick={this.handleClick}>Click Me</button>
    )
  }
}


export default Button;
