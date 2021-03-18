
import './App.css';
import AircraftPage from './components/AircraftPage/AircraftPage';
import AircraftView from './components/AircraftView/AircraftView';
import Header from './components/Header/Header';

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Route exact={true} path="/dcsdb/aircraft" component={AircraftPage}/>
        <Route exact={true} path="/dcsdb/aircraft/:id" component={AircraftView}/>
      </Router>
    </div>
  );
}

export default App;
