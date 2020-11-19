import React, {Component} from "react";

import classes from './Sitebar.module.css'
import {NavLink} from "react-router-dom";
import Content from "../profile/Profile";
import Dialog from "../dialogs/Dialogs";


const Sitebar = () => {

        return (
            <nav className={classes.Sitebar}>
                <div className={classes.Item}>
                    <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
                </div>

                <div className={classes.Item}>
                    <NavLink to="/dialog">Dialog</NavLink>
                </div>
                <div className={classes.Item}>
                    <NavLink to="/news">News</NavLink>
                </div>
                <div className={classes.Item}>
                    <NavLink to="/music">Music</NavLink>
                </div>
                <div className={classes.Item}>
                    <NavLink to="/setting">Setting</NavLink>
                </div>
            </nav>

        );


}

export default Sitebar;
