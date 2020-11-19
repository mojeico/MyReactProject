import React, {Component} from "react";
import {NavLink} from "react-router-dom";

import classes from './Dialog.module.css'


const Dialog = () => {


        return (
            <div className={classes.dialog}>

                <NavLink to={"/dialog/" + this.props.idUser}> {this.props.nameSurname}</NavLink>


            </div>
        );





}

export default Dialog
