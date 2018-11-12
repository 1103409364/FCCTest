import React, { Component } from 'react'
import InputArea from './InputArea'
import MarkdownShower from './MarkdownShower'


class MarkdownApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }
  // 初始化
  initialState() {
    this.setState({
      value: "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*"
    })
  }
  handleInput(value) {
    this.setState({
      value: value
    })
  }
  componentWillMount() {
    this.initialState()
  }
  render() {
    return (
      <div>
        <InputArea handleInput={this.handleInput.bind(this)} defaultValue={this.state.value} />
        <MarkdownShower value={this.state.value} />
      </div>
    )

  }
}

export default MarkdownApp
