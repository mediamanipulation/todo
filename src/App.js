import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoListPat from "./components/TodoListPat";
// import Form from "./components/MyForm";
// import Form from "./components/ValidationForm";
// import Rando from "./components/FetchRandomUser";

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
        <TodoList /> 
        {/* <Form /> */}
        {/* <Rando /> */}
        <br/>
        <br/>
        <TodoListPat />
      </div>
    );
  }
}

export default App;
