import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route } from 'react-router-dom';
import Player from './components/player';

function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route path='/' exact component={Home}/>
        <Route path='/player' component={Player} />
      </switch>
    </BrowserRouter>
  );
}

export default App;


