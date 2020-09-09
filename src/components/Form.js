import React from 'react';
import axios from 'axios'

class Form extends React.Component {
  state = {userName: ''};
  handleSubmit = (event) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${'this.state.userName'}`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          placeholder="type github username..." 
          type="text" 
          required
          value={this.state.userName}
          onChange={event => this.setState({userName: event.target.value})}>

        </input>
        <button className="link">Add</button>
      </form>
    );
  }
}

export default Form;