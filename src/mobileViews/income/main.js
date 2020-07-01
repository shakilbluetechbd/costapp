import React from 'react';
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }

  handleClick = () => {
    this.setState((prev) => {
      return {
        count: prev.count + 1
      }
    }
    )
  }

  render() {
    return (
      <div>
        count: {this.state.count}
        
        <button onClick={this.handleClick} > Click here</button>
      </div>
    );
  }
}

export default Main;