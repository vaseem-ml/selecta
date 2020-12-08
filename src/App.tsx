import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Selecta from './Component/Selecta';
import Login from './Component/Account/Login';
import './Component/Sass/Attech.scss'; 
const App = () => {
  return (
    <Router>
      <Selecta />
    </Router> 
  );
}

export default App;
