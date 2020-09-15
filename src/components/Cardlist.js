import React from 'react';
import Card from './Card';

const Cardlist = (props) => (
  <div>
     {props.profiles.map(profile => <Card {...profile} key={profile.id}/>)}
  </div>
);


export default Cardlist;