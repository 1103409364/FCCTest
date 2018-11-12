import React, { Component } from 'react'
import marked from 'marked'

class MarkdownShower extends Component {
  rawMarkup(value) {
    // 使用Markdown的解析引擎的marked方法
    // sanitize
    // 它是一个布尔值，默认为false。
    // 对输出进行过滤（清理），将忽略任何已经输入的html代码（标签）
    // 使用说明 https://www.cnblogs.com/djtao/p/6224399.html
    var rawMarkup = marked(value, { sanitize: true });
    console.log(rawMarkup);
    return { __html: rawMarkup };
  }
  render() {
    return (
      <div className="markdownShower clearfix" dangerouslySetInnerHTML={this.rawMarkup(this.props.value)} />
    )
  }
}

export default MarkdownShower
