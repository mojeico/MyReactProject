import React from "react";

import classes from './Dialogs.module.css'

const Dialogs = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.updateNewPostElement(newPostElement.current.value)
    }

    let onPostChange = () => {
        console.log(newPostElement.current.value)
        props.updateNewPostAction(newPostElement.current.value)
    }


    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.state.dialog.dialogsData}
            </div>

            <div className={classes.messageList}>
                <p>Choose a Dialog</p>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.state.dialog.newPostText}/>
                <button onClick={addPost}>Click</button>
                {props.state.dialog.messageMy}
            </div>

        </div>

    );
}

export default Dialogs
