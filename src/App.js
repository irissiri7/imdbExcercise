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
  let [sortedByName, updateSortedByName] = useState(false);
  let [sortedByPopularity, updateSortedByPopularity] = useState(false);


  const generateRandomActors = () => {
    updateSortedByName(false);
    updateSortedByPopularity(false);
    
    const startIndex = Math.random()* json.length -5;
    const endIndex = startIndex + 5;

    updateActors(() => json.slice(startIndex, endIndex).map(item => item))
  }

  const sortByName = () => {
    if(!sortedByName){
      updateActors(() => actors.sort((a, b) => (a.name > b.name) ? 1 : -1));
      updateSortedByPopularity(false);
      updateSortedByName(true);
    }
  }

  const sortByPopularity = () =>{
    if(!sortedByPopularity){
      updateActors(() => actors.sort((a, b) => (a.popularity < b.popularity) ? 1 : -1));
      console.log(actors);
      updateSortedByName(false);
      updateSortedByPopularity(true);
    }
  }
  

  return (
    <div id='app-main'>
      <h1>Hello world</h1>
      <Button text="Generate Random actors" action={generateRandomActors}/>
      <Button text="Sort By Name" action={sortByName}/>
      <Button text="Sort By Popularity" action={sortByPopularity}/>

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
              actors.map((item, index) => <Card sortedByName={sortedByName} key={index} picture={item.pictureUrl} name={item.name} popularity={item.popularity} action={<Button text={'delete'} />}/>)
            }
            </tbody>
        </table>
      
      
    </div>
  );
}

export default App;
