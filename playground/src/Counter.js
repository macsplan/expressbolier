import React, {Component} from 'react'

class Counter extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    let count = this.state.count
    let newCount = count + 1
    this.setState ({count: newCount})
  }

  render() {
    return (
      <div>
        the count is a {this.state.count}
          <button onClick={this.handleClick}>Plus One</button>
          </div>
    )
  }
}

export default Counter;
