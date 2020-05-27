import React from "react";
import shortid from 'shortid';

export default class TodoFormPat extends React.Component {
  state = {
    text: ""
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (e) =>{
      e.preventDefault();
      // submit the form 
      this.props.onSubmit( {
        id: shortid.generate(),
        text: this.state.text,
        complete: false
      })
      this.setState({
          text:''
      })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Todo..."
          />
          <button onClick={this.handleSubmit}>Add Todo</button>
        </form>
      </div>
    );
  }
}
