import logo from './logo.svg';
import './App.css';

import React, {Component} from 'react';

import {BrowserRouter, Route} from "react-router-dom";


import './App.css';

import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sitebar from "./sitebar/Sitebar";
import Dialog from "./dialogs/Dialogs";
import Profile from "./profile/Profile";


const App = (props) => {
  return (

      <BrowserRouter>

        <div className='SiteWrapper'>

          <Header/>
          <Sitebar/>

          <div className='AppContentWrapper'>

            <Route exact path='/profile' component={Profile}/>
            <Route exact path='/dialog' component={Dialog}/>

          </div>

          {/*
                    <Footer/>
*/}
        </div>

      </BrowserRouter>

  );
}

export default App;
