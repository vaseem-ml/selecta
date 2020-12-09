import React, { useEffect } from 'react';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer/Footer';
import Dashboard from './Dashboard/Dashboard';
import UserProfile from './UserProfile/UserProfile';
import TableList from './TableList/TableList';
import { useSession } from "react-use-session";
import './Sass/Attech.scss';
import { Switch, Route } from 'react-router-dom';
import Login from './Account/Login';
import Brokering from './Brokering/Brokering';
import Compare from './Compare/Compare';
import Data from './Data/Data';
import Statistics from './Statistics/Statistics';
import Targeting from './Targeting/Targeting';
import General from './General/General';
import { login } from "../store/actions/login.action";
import {PrivateRoute} from '../common/components/PrivateRoute';
const Selecta = () => {
  const { session } = useSession("selecta");
    const dispatch = useDispatch();

  useEffect(() => {
    
    var user = localStorage.getItem("loginData") || '';
    if(user!=="") {
      var userData = JSON.parse(user);
    }
    

    console.log('this is user data', userData);
    if(session) {
      if(userData.username!=="") {
        dispatch(login(userData.username))
      }
    }
  }, [])


  return (
    <>
      <div className="wrapper ">
        <div className="sidebar" data-color="purple" data-background-color="white" data-image="/assets/img/sidebar-1.jpg">
          <Sidebar />
        </div>
        <div className="main-panel">
          <Header />
          <div className="content">
            <div className="container-fluid">
              <Switch>
                <PrivateRoute path='/'>
                  <Route exact path="/" render={() => <General />} />
                  <Route exact path="/data" render={() => <Data />} />
                  <Route exact path="/statistics" render={() => <Statistics />} />
                  <Route exact path="/targetting" render={() => <Targeting />} />
                  <Route exact path="/brokering" render={() => <Brokering />} />
                  <Route exact path="/compare" render={() => <Compare />} />
                </PrivateRoute>
              </Switch>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Selecta;