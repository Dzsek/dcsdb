
import './App.css';
import AircraftPage from './components/AircraftPage/AircraftPage';
import AircraftView from './components/AircraftView/AircraftView';
import Header from './components/Header/Header';

import {HashRouter as HashRouter, Redirect, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <HashRouter hashType="slash">
        <Header/>
        <Route exact={true} path="/">
          <Redirect to="/aircraft" />
        </Route>
        <Route exact={true} path="/aircraft" component={AircraftPage}/>
        <Route exact={true} path="/aircraft/:id" component={AircraftView}/>
      </HashRouter>
    </div>
  );
}

export default App;
