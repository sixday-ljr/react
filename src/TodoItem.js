import { Component } from "react";
import PropTypes from 'prop-types'
class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.dell = this.dell.bind(this);
  }
  render() {
    const { content } = this.props;
    return <div onClick={this.dell}>{content}</div>;
  }
  dell() {
    const { dells, index } = this.props;
    dells(index);
  }
  
}
TodoItem.propTypes ={
  content:PropTypes.string,
  dells:PropTypes.func,
  index:PropTypes.number
}
export default TodoItem;
