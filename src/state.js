import DialogItem from "./dialogs/dialogItem/DialogsItem";
import Message from "./dialogs/message/Message";
import React from "react";


let store = {
    _state: {
        dialogsData: [
            {id: 1, name: 'Gleb'},
            {id: 2, name: 'Andrei'},
            {id: 3, name: 'Alex'},
            {id: 4, name: 'Olex'},
            {id: 5, name: 'Alex'},
            {id: 6, name: 'Jora'},
            {id: 7, name: 'Misha'},
            {id: 8, name: 'Olex'}].map(s => <DialogItem name={s.name} id={s.id}/>),
        messageMy: [{id: 1, name: 'Gleb1'},
            {id: 2, message: 'hi2'},
            {id: 3, message: 'hi3'},
            {id: 4, message: 'hi4'},
            {id: 5, message: 'hi5'},
            {id: 6, message: 'hi6'},
            {id: 7, message: 'hi7'},
            {id: 8, message: 'hi8'},
            {id: 9, message: 'hi9'}].map(s => <Message id={s.id} message={s.message}/>),
        newPostText: 'test123'
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log("bl bla bla")
    },
    addPost(post) {
        this._state.messageMy.push(<Message id={9} message={post}/>)
        this._state.newPostText = '';
        this._callSubscriber(this._state)
        debugger
    },
    changeNewPost(newText) {
        this._state.newPostText = newText;
        this._callSubscriber(this._state)
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

}


export default store
window.store = store
