import './App.css';
import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';
import Dialogs from "./dialogs/Dialogs";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Sitebar from "./sitebar/Sitebar";
import Profile from "./profile/Profile";

const App = (props) => {

    return (

        <BrowserRouter>
            <div className='SiteWrapper'>
                <Header/>
                <Sitebar/>
                <div className='AppContentWrapper'>
                    <Route exact path='/profile' render={() => <Profile/>}/>
                    <Route exact path='/dialog'
                           render={() => <Dialogs state={props.state} dispatch={props.dispatch}/>}/>
                </div>
                {/*
                    <Footer/>
*/}
            </div>
        </BrowserRouter>
    );
}

export default App;
