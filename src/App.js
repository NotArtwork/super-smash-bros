import './App.css';
import Fighter from './components/Fighter';


function App() {
  const fighters = [
    {name: 'Inkling',color:'orange'},
    {name: 'Lucina',color:'blue'},
    {name: 'Mario',color:'darkred'},
    {name: 'Yoshi',color:'lightgreen'},
    {name: 'Luigi',color:'green'},
    {name: 'Snake',color:'gray'},
    {name: 'Fox',color:'purple'},
    {name: 'Marth',color:'lightskyblue'},
    {name: 'Sora',color:'red'},
    {name: 'Ike',color:'darkblue'},
    {name: 'Cloud',color:'white'},
    {name: 'Peach',color:'pink'},
]
  return (
    <div className='App'>
      <h1>Fighters</h1>
      <div className='fighters-grid'>
        {
          fighters.map((element, index) => {
            return (
             <Fighter fighter={element}/>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
