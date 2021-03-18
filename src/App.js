
import './App.css';
import AircraftPage from './components/AircraftPage/AircraftPage';
import Header from './components/Header/Header';

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Route path="/dcsdb/aircraft" component={AircraftPage}/>
      </Router>
    </div>
  );
}

export default App;
