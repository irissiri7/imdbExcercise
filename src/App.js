import React from 'react';
import './App.css';
import Button from './Components/Button';
import Card from './Components/Card';

const json = require('./Data/imdb.json');
console.log(json);

function App() {
  return (
    <div id='app-main'>
      <h1>Hello world</h1>
      <Button text="Lydia"/>
      <Card/>
    </div>
  );
}

export default App;
