import React, {useState} from 'react';
import './App.css';
import Button from './Components/Button';
import Card from './Components/Card';

const json = require('./Data/imdb.json');

const tableStyle = {
  width: 'fit-content',
  margin: '0 auto'
}

function App() {
  const [actors, updateActors] = useState(json.slice(0,5).map(item => item));
  console.log(actors);

  const generateRandomActors = () => {
    let rdn = Math.random()* json.length -5;
    console.log(rdn);
    updateActors(() => json.slice(rdn, rdn+5).map(item => item))
    console.log(actors);
  }

  const sortByName = () => {
    console.log('orginal');
    console.log(actors);
    // let sortedActors = actors.sort((a, b) => (a.name > b.name)? 1:-1);
    // console.log('sorted');
    // console.log(sortedActors);
    // updateActors(sortedActors);
  }
  

  return (
    <div id='app-main'>
      <h1>Hello world</h1>
      <Button text="Generate Random actors" action={generateRandomActors}/>
      <Button text="Sort By Name" action={sortByName}/>
      <Button text="Sort By Popularity"/>

      <table style={tableStyle}>
            <thead>
                <tr>
                    <th>Picture</th>
                    <th>Name</th>
                    <th>Popularity</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
            {
              actors.map(item => <Card key= {item.name} picture={item.pictureUrl} name={item.name} popularity={item.popularity} action={<Button text={'delete'} />}/>)
            }
            </tbody>
        </table>
      
      
    </div>
  );
}

export default App;
