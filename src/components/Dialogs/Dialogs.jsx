import React from "react";
import {Navigate} from "react-router-dom";
import classes from "./Dialogs.module.css";
import DialogItems from "./DialogItems/DialogItems";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItems name={dialog.name}
                                                                                   id={dialog.id}
                                                                                   key={dialog.id}/>);
    // [
    //     <DialogItems name={dialogsData[0].name} id={dialogsData[0].id}/>,
    //     <DialogItems name={dialogsData[1].name} id={dialogsData[1].id}/>,
    //     <DialogItems name={dialogsData[2].name} id={dialogsData[2].id}/>,
    //     <DialogItems name={dialogsData[3].name} id={dialogsData[3].id}/>,
    //     <DialogItems name={dialogsData[4].name} id={dialogsData[4].id}/>,
    //     <DialogItems name={dialogsData[5].name} id={dialogsData[5].id}/>,
    // ]

    let messagesElements = props.dialogsPage.messagesData.map(message => <Message message={message.message}
                                                                                  key={message.id}/>);
    // [
    //     <Message message={messagesData[0].message}/>,
    //     <Message message={messagesData[1].message}/>,
    //     <Message message={messagesData[2].message}/>,
    // ]

    let newMessageBody = props.dialogsPage.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    };

    let onNewMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageBody(body);
    };

    if (props.isAuth === false) {
        return <Navigate to={"/login"}/>;
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder="Enter your message"></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    );
};

export default Dialogs;