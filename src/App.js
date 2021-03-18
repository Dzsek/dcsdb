
import './App.css';
import AirplaneList from './components/AirplaneList/AirplaneList';
import Header from './components/Header/Header';

import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Route path="/dcsdb/aircraft" component={AirplaneList}/>
      </Router>
    </div>
  );
}

export default App;
