import React, {useState} from 'react';
import './Styling/app.css';
import Button from './Components/Button';
import Card from './Components/Card';
import {tableStyle} from './Styling/tableStyles';



const json = require('./Data/imdb.json');



const App = () => {
  const [actors, updateActors] = useState(json.slice(0,5).map(item => item));
  const [sortedByName, updateSortedByName] = useState(false);
  const [sortedByPopularity, updateSortedByPopularity] = useState(false);


  const generateRandomActors = () => {
    const startIndex = Math.random()* (json.length -5);
    const endIndex = startIndex + 5;

    updateActors(() => json.slice(startIndex, endIndex).map(item => item))

    if(sortedByName || sortedByPopularity)
      resetSortingStates();
  }
  
  const resetSortingStates = () =>{
    updateSortedByPopularity(false);
    updateSortedByName(false);
  }

  const sortByName = () => {
    if(!sortedByName){
      updateActors(() => actors.sort((a, b) => (a.name > b.name) ? 1 : -1));
      updateSortedByName(true);
    
    if(sortedByPopularity)
      updateSortedByPopularity(false);
    }
  }

  const sortByPopularity = () =>{
    if(!sortedByPopularity){
      updateActors(() => actors.sort((a, b) => (a.popularity < b.popularity) ? 1 : -1));
      updateSortedByPopularity(true);
      
      if(sortedByName)
        updateSortedByName(false);
    }
  }

  const deleteActor = (e) => {
    const indexToRemove = e.target.parentElement.parentElement.rowIndex - 1;
    let newActorsArray = actors.filter((element, index) => index !== indexToRemove);
    updateActors(newActorsArray);
  }

  

  return (
    <div id='app-main'>
      <h1>IMDB ACTORS</h1>
      <Button text="Generate Random actors" handleClick={generateRandomActors}/>
      <Button text="Sort By Name" handleClick={sortByName}/>
      <Button text="Sort By Popularity" handleClick={sortByPopularity}/>

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
              actors.map((item, index) => <Card key={index} picture={item.pictureUrl} name={item.name} popularity={Math.round(item.popularity)} action={<Button text={'delete'} handleClick={deleteActor} />}/>)
            }
            </tbody>
        </table>
      
      
    </div>
  );
}

export default App;
