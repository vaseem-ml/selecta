import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Data from '../Data/Data';
import Brokering from '../Brokering/Brokering';
import Compare from '../Compare/Compare';
import Statistics from '../Statistics/Statistics';
import Targeting from '../Targeting/Targeting';
const WorkMenu = () => {
  return (
    <>
      <div className="col-12 p-0 overflow-hidden">
        <div className="menuSec menuSecHold float-left" style={{ backgroundImage: "url(/Assets/Images/selectabg.jpeg)" }}>
          <ul>
            <li><Link to="/data">Data</Link></li>
            <li><Link to="/brokering">Brokering</Link></li>
            <li><Link to="/compare">Compare</Link></li>
            <li><Link to="/statistics">Statistics</Link></li>
            <li><Link to="/targeting">Targeting</Link></li>
          </ul>
        </div>
        <div className="triggerSec float-left">
          <Switch>
            <Route exact path="/data" render={() => <Data />} />
            <Route exact path="/brokering" render={() => <Brokering />} />
            <Route exact path="/compare" render={() => <Compare />} />
            <Route exact path="/statistics" render={() => <Statistics />} />
            <Route exact path="/targeting" render={() => <Targeting />} />
          </Switch>
        </div>
      </div>
    </>
  );
}

export default WorkMenu;