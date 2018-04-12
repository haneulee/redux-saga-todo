import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background: white;
`;

const AsyncButton = Button.extend`
  color: tomato;
  border-color: tomato;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

const listStyle = {
  listStyle: "none"
};

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
      <Wrapper>
        <Title>TODO LIST</Title>
        <Input onChange={this.handleChange} value={this.state.inputVal} />
        <Button onClick={this.handleClick}>+</Button>

        <ul>
          {
            this.props.todoList.map(({ text, id }, index) => (
              <li style={listStyle} key={index}>{text}
                <Button id={id} onClick={this.handleClick}>-</Button>
                <AsyncButton id={id} onClick={this.handleClick}>- (async)</AsyncButton></li>
            ))
          }
        </ul>
      </Wrapper>
    );
  }
}

export default App;
