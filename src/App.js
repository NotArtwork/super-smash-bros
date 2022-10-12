import './App.css';
import { useState } from 'react'
import Fighter from './components/Fighter';
import FighterScreen from './components/FighterScreen';


function App() {
  const fighters = [
    {name: 'Inkling',color:'orange'},
    {name: 'Lucina',color:'blue'},
    {name: 'Mario',color:'darkred'},
    {name: 'Yoshi',color:'lightgreen'},
    {name: 'Luigi',color:'green'},
    {name: 'Snake',color:'gray'},
    {name: 'Fox',color:'brown'},
    {name: 'Marth',color:'lightskyblue'},
    {name: 'Sora',color:'red'},
    {name: 'Ike',color:'darkblue'},
    {name: 'Cloud',color:'white'},
    {name: 'Peach',color:'pink'},
  ]

  const [selectedFighter, setSelectedFighter] = useState()
  const handleClick = (element) => {
    setSelectedFighter(element.name)
  }


  return (
    <div className='App'>
      <h1>Fighters</h1>
      <div className='fighters-grid'>
        {
          fighters.map((element, index) => {
            return (
             <Fighter fighter={element} setSelectedFighter={setSelectedFighter}/>
            )
          })
        }
      </div>
      {
        // Conditional render (based on terner)
        selectedFighter ?
        <FighterScreen selectedFighter={selectedFighter}/>
        : null
      }
    </div>
  );
}

export default App;
