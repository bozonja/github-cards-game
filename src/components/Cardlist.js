import React from 'react';
import Card from './Card';

const githubData = [
  {
    name: "Josip Marković", 
    bio: "Designer & FrontEnd Developer",
    avatar_url: "https://avatars0.githubusercontent.com/u/35841169?v=4"
  },
  {
    name: "Viktor Lešić", 
    bio: "FrontEnd Developer",
    avatar_url: "https://avatars1.githubusercontent.com/u/32477795?v=4"
  },
  {
    name: "Toni Franulic", 
    bio: "FrontEnd Developer",
    avatar_url: "https://avatars2.githubusercontent.com/u/38908260?v=4"
  }
];

const Cardlist = () => (
  <div>
    <Card {...githubData[0]}/>
    <Card {...githubData[1]}/>
    <Card {...githubData[2]}/>
  </div>
);


export default Cardlist;