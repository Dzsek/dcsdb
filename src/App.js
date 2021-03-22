
import './App.scss';
import AircraftPage from './components/Aircraft/AircraftPage';
import WeaponPage from './components/Weapon/WeaponPage';
import AircraftView from './components/Aircraft/AircraftView';
import Header from './components/Common/Header';

import {Redirect, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <div className="App">
        <Header/>
            <Switch>
              <Route exact={true} path="/">
                <Redirect to="/aircraft" />
              </Route>
              <Route exact={true} path="/aircraft">
                <AircraftPage/>
              </Route>
              <Route exact={true} path="/weapons">
                <WeaponPage/>
              </Route>
              <Route exact={true} path="/aircraft/:id">
                <AircraftView/>
              </Route>
            </Switch>
    </div>
  );
}

export default App;
