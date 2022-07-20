import './App.css';



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
              <div>
                <img src={`https://www.smashbros.com/assets_v2/img/fighter/thumb_a/${element.toLowerCase()}.png`} className='fighter-image' />
                <h5 className='fighter-name'>{element}</h5>
              </div>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
