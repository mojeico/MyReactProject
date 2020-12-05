import React from "react";

import Dialogs from "./Dialogs";

const ADD_POST = 'ADD_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let onAddPostAction = (post) => {
    return {type: ADD_POST, post: post}
}

let onUpdatePostAction = (newText) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: newText}
}


const DialogsContainer = (props) => {

    let onAddPost = (text) => {
        let action = onAddPostAction(text)
        props.dispatch(action)
    }

    let onPostChange = (text) => {
        let action = onUpdatePostAction(text)
        props.dispatch(action)
    }

    return (
        <Dialogs updateNewPostAction={onPostChange} updateNewPostElement={onAddPost} dispatch={props.dispatch} state={props.state}/>
    );
}

export default DialogsContainer
