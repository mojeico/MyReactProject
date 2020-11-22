import React, {Component, createRef} from "react";

import classes from '../Dialogs.module.css'





const Message = (proprs) => {

    return (

        <div>
            {proprs.message}

        </div>
    )
}

export default Message
