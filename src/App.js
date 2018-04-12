import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: ""
    };
  }

  handleClick = (e) => {
    let textVal = e.target.textContent;

    if (textVal === "+") {
      this.props.add(this.state.inputVal);
      this.setState({ inputVal: "" });
    } else if (textVal === "-") {
      this.props.remove(e.target.getAttribute("id"));
    } else {
      this.props.remove_async(e.target.getAttribute("id"));
    }
  }

  handleChange = (e) => {
    this.setState({ inputVal: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>TODO LIST</h1>
        <input onChange={this.handleChange} value={this.state.inputVal} />
        <button onClick={this.handleClick}>+</button>

        <ul>
          {
            this.props.todoList.map(({ text, id }, index) => (
              <li key={index}>{text}
                <button id={id} onClick={this.handleClick}>-</button>
                <button id={id} onClick={this.handleClick}>- (async)</button></li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default App;
