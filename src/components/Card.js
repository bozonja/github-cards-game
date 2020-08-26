import React from 'react';

class Card extends React.Component {
  render() {
    return (
      <div className="github-profile">
        <img src="https://placehold.it/75" />
          <div className="info">
            <h3>Name here...</h3>
            <p>Company here</p>
          </div>
      </div>
    );
  }
}

export default Card;