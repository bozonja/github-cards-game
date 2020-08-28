import React from 'react';
import './App.css';
import Cardlist from './components/Cardlist';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <h1 className="header-title">Github profiles</h1>
      <Form />
      <Cardlist />
    </div>
  );
}

export default App;
