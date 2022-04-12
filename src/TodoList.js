import { Component } from "react";
import "./style.css";
import TodoItem from "./TodoItem";
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //state指的是组件的状态  this指向
      inputValue: "",
      list: [],
    };
    this.inputChange = this.inputChange.bind(this);
    this.inputClickButton = this.inputClickButton.bind(this);
    this.dell = this.dell.bind(this);
  }
  render() {
    return (
      <div>
        {/* 这是一个input */}

        <h1>hello world</h1>
        <input
          type="text"
          className="input"
          value={this.state.inputValue}
          onChange={this.inputChange}
        />
        <button onClick={this.inputClickButton}>提交</button>
        <ul>{this.getTodoItem()}</ul>
      </div>
    );
  }
  getTodoItem() {
    return this.state.list.map((item, index) => {
      //map 进行循环
      return <TodoItem content={item} index={index} dells={this.dell} />;
    });
  }
  inputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value,
    })); //target指的是input的dom节点
  }

  inputClickButton() {
    this.setState(prevState => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: "",
    }));
    // this.setState({
    //   list: [...this.state.list, this.state.inputValue],
    //   inputValue: "",
    // });
  }

  dell(index) {
    //immutable
    //state不允许我们做任何的改变
    // const list = [...this.state.list];
    // list.splice(index, 1);
    this.setState(prevState => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {
        list,
      };
    });
    // this.setState({
    //   list: list,
    // });
    console.log(index);
  }
}
export default TodoList;
