import React from "react";

import classes from './Dialogs.module.css'


const Dialogs = (props) => {


    return (


        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>


                {props.state.newDialogs}

            </div>


            <div className={classes.messageList}>
                {/* <p>Choose a Dialog</p>

                <textarea></textarea>

                <button>Click</button>*/}

                {props.state.newMessage}

            </div>


        </div>

    );

}


export default Dialogs
