import './App.css';
import Fighter from './components/Fighter';


function App() {
  const fighters = [
  'Inkling','Lucina', 'Mario','Yoshi',
  'Luigi', 'Snake', 'Fox', 'Marth',
  'Sora', 'Ike','Cloud', 'Zelda' ]
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
