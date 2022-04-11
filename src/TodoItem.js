import React, { Component } from "react";

class TodoItem extends React.Component {
  constructor(props) {
    super(props);
    this.dell = this.dell.bind(this);
  }
  render() {
    return <div onClick={this.dell}>{this.props.content}</div>;
  }
  dell() {
    this.props.dells(this.props.index);
  }
}

export default TodoItem;
