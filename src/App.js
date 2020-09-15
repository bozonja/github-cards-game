import React from 'react';
import { useState } from 'react';
import './App.css';
import Cardlist from './components/Cardlist';
import Form from './components/Form';

const githubData = [];

function App() {

  const [state, setState] = useState(githubData);

  const addNewProfile = (profileData) => {
    setState( prevState => ( [...prevState, profileData] ));
  }

  return (
    <div className="App">
      <h1 className="header-title">Github profiles</h1>
      <Form onSubmit={addNewProfile}/>
      <Cardlist profiles={state}/>
    </div>
  );


}

export default App;
