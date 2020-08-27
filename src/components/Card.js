import React from 'react';

class Card extends React.Component {
  render() {
    const profile = this.props;
    return (
      <div className="github-profile">
        <img src={profile.avatar_url} style={{width: '125px'}} alt=""/>
          <div className="info">
            <h3>{profile.name}</h3>
            <p>{profile.bio}</p>
          </div>
      </div>
    );
  }
}

export default Card;