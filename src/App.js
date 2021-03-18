
import './App.css';
import AircraftList from './components/AircraftList/AircraftList';
import Header from './components/Header/Header';

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Route path="/dcsdb/aircraft" component={AircraftList}/>
      </Router>
    </div>
  );
}

export default App;
