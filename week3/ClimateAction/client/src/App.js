import { Routes , Route } from 'react-router-dom'
import Auth from './components/Auth';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route
          exact path="/"
          element={ <Auth /> }
        />
      </Routes>
    </div>
  );
}

export default App;
