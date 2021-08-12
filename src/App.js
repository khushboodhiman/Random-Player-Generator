import './App.css';
import names from './players';
import {changeTurn} from './changeTurn';

function App() {
  let player = names[Math.floor(Math.random() * names.length)];

  return (
    <div className="App">
        <h1 className='player'>{player}</h1>
        <p>It's your turn!</p>
        <div className="actions">
          <button onClick={changeTurn} className="btn btn-secondary">Skip my turn</button>
          <button onClick={changeTurn} className="btn btn-primary">Who's Next?</button>
        </div>
    </div>
  );
}

export default App;