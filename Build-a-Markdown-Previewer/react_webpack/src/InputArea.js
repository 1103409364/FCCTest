import React, { Component } from 'react'

class InputArea extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue
    }
  }
  handleInputChange(e) {
    var value = e.target.value;
    this.setState({
      value: value

    })
    if (typeof this.props.handleInput == "function") {
      this.props.handleInput(value);
      console.log(11);

    }
  }
  render() {
    return (
      <textarea
        className="inputArea"
        rows="22"
        value={this.state.value}
        onChange={this.handleInputChange.bind(this)} />
    );
  }
}

export default InputArea
