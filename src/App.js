import './App.css';

import React, {Component} from 'react';

import {BrowserRouter, Route} from "react-router-dom";


import './App.css';

import Dialogs from "./dialogs/Dialogs";

import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sitebar from "./sitebar/Sitebar";
import Profile from "./profile/Profile";


const App = (props) => {

    debugger

    return (

        <BrowserRouter>

            <div className='SiteWrapper'>

                <Header/>
                <Sitebar/>

                <div className='AppContentWrapper'>



                    <Route exact path='/profile' render={() => <Profile/>}/>
                    <Route exact path='/dialog' render={() => <Dialogs state={props.state} addPost={props.addPost} changeNewPost={props.changeNewPost} />}/>

                </div>

                {/*
                    <Footer/>
*/}
            </div>

        </BrowserRouter>

    );
}

export default App;
