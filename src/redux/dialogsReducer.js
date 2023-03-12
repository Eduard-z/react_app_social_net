const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE_BODY = "SEND-MESSAGE-BODY";

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newBody;
            break;
        case SEND_MESSAGE_BODY:
            let newMessage = {
                id: 3,
                message: state.newMessageBody
            };

            state.messagesData.push(newMessage);
            state.newMessageBody = "";
            break;
        default:
            break;
    }

    return state;
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE_BODY});
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, newBody: text});

export default dialogsReducer;