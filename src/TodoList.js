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
          onChange={this.inputChange.bind(this)}
        />
        <button onClick={this.inputClickButton.bind(this)}>提交</button>
        <ul>
          {this.state.list.map((item, index) => {
            //map 进行循环
            return (
              <div>
                <TodoItem
                  content={item}
                  index={index}
                  dells={this.dell.bind(this)}
                />
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
  inputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
    console.log(e.target.value); //target指的是input的dom节点
  }

  inputClickButton() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: "",
    });
  }

  dell(index) {
    //immutable
    //state不允许我们做任何的改变
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list,
    });
    console.log(index);
  }
}
export default TodoList;
