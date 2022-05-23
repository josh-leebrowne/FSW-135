import { Routes , Route, Navigate } from 'react-router-dom'
import Auth from './components/Auth';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import { UserContext } from './context/UserProvider';
import './components/App.css';
import { useContext } from 'react';

const App = () => {

  const {token} = useContext(UserContext)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          exact path="/"
          element={ token ? <Navigate replace to='/profile' /> :<Auth /> }
        />
        <Route
          exact path="/profile"
          element={ <Profile /> }
        />
        {/* <Route 
          exact path="/public"
          element={ <Public /> }
        /> */}
      </Routes>
    </div>
  );
}

export default App;
