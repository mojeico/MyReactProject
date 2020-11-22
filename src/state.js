import DialogItem from "./dialogs/dialogItem/DialogsItem";
import Message from "./dialogs/message/Message";

let state = {

    dialogsData: [
        {id: 1, name: 'Gleb'},
        {id: 2, name: 'Andrei'},
        {id: 3, name: 'Alex'},
        {id: 4, name: 'Olex'},
        {id: 5, name: 'Alex'},
        {id: 6, name: 'Jora'},
        {id: 7, name: 'Misha'},
        {id: 8, name: 'Olex'}],
    newDialogs: this.dialogsData.map(s => <DialogItem name={s.name} id={s.id}/>),
    message: [{id: 1, name: 'Gleb'},
        {id: 2, message: 'hi'},
        {id: 3, message: 'hi'},
        {id: 4, message: 'hi'},
        {id: 5, message: 'hi'},
        {id: 6, message: 'hi'},
        {id: 7, message: 'hi'},
        {id: 8, message: 'hi'}],
    newMessage: this.message.map(s => <Message id={s.id} message={s.message}/>)

}


export default state
