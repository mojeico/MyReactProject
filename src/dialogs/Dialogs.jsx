import React from "react";

import classes from './Dialogs.module.css'


const Dialogs = (props) => {



    let newPostElement = React.createRef();

    let addPost = () => {
        alert(newPostElement.current.value)
    }

    return (


        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>
                {props.state.dialogsData}
            </div>


            <div className={classes.messageList}>
                <p>Choose a Dialog</p>
                <textarea ref={newPostElement}></textarea>
                <button onClick={addPost}>Click</button>
                {props.state.messageMy}
            </div>


        </div>

    );

}


export default Dialogs
