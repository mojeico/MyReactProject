import React, {Component, createRef} from "react";

import classes from './Dialogs.module.css'

import Message from "./message/Message";
import Dialog from "./dialog/Dialog";

const Dialogs = () => {










        return (

            <div className={classes.dialogs}>

                <div className={classes.dialogsItems}>
                </div>

                <div className={classes.messageList}>
                    <p>Choose a Dialog</p>

                    <textarea  ></textarea>

                    <button >Click</button>
                    {/*<Message id='123'/>*/}

                </div>


            </div>

        );

}


export default Dialogs
