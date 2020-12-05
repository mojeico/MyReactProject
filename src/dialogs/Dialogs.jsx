import React from "react";

import classes from './Dialogs.module.css'

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let addPostAction = (post) => {
    return {type: ADD_POST, post : post}
}

let updatePostAction = (newText) => {
    return {type: UPDATE_NEW_POST_TEXT, newText : newText}
}


const Dialogs = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        //props.dispatch({type: 'ADD-POST', post: newPostElement.current.value})
        props.dispatch(addPostAction(newPostElement.current.value))
    }

    let onPostChange = () => {
        console.log(newPostElement.current.value)
        //props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: val})
        props.dispatch(updatePostAction(newPostElement.current.value))
    }

    debugger
    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.state.dialogReducer.dialogsData}
            </div>

            <div className={classes.messageList}>
                <p>Choose a Dialog</p>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.state.newPostText}/>
                <button onClick={addPost}>Click</button>
                {props.state.dialogReducer.messageMy}
            </div>

        </div>

    );
}

export default Dialogs
