import React from "react";

import classes from './Dialogs.module.css'



const Dialogs = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost(newPostElement.current.value)
    }

    let onPostChange = () => {
        let val = newPostElement.current.value
        console.log(val)
        props.changeNewPost(val)
    }
    return (



        <div className={classes.dialogs}>

            <div className={classes.dialogsItems}>

                {props.state.dialogsData}
            </div>


            <div className={classes.messageList}>

                <p>Choose a Dialog</p>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.state.newPostText}/>
                <button onClick={addPost}  >Click</button>
                {props.state.messageMy}
            </div>


        </div>

    );

}


export default Dialogs
