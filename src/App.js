import { Container } from 'react-bootstrap';
import './App.css';
import PlayersList from './components/PlayerList';

function App() {
  return (
    <div className="App">
        <Container>
          <PlayersList/>
        </Container>
    </div>
  );
}

export default App;
