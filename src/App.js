import React from 'react';
import './App.css';
import Cardlist from './components/Cardlist';
import Form from './components/Form';

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

function App() {
  return (
    <div className="App">
      <h1 className="header-title">Github profiles</h1>
      <Form />
      <Cardlist profiles={githubData}/>
    </div>
  );
}

export default App;
