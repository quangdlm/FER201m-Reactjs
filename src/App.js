import logo from './logo.svg';
import './css/main.min.css';
import Navigation from './component/navigation';
import Player from './component/player';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Player/>
    </div>
  );
}

export default App;
