import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <input placeholder="type github username..." type="text"></input>
        <button className="link">Add</button>
      </form>
    );
  }
}

export default Form;