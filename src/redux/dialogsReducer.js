const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE_BODY = "SEND-MESSAGE-BODY";

let initialState = {
    dialogsData: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Victor"},
        {id: 5, name: "Sasha"},
        {id: 6, name: "Valera"},
    ],
    messagesData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"},
    ],
    newMessageBody: ""
};

const dialogsReducer = (state=initialState, action) => {
    let stateCopy = structuredClone(state);

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            stateCopy.newMessageBody = action.newBody;
            break;
        case SEND_MESSAGE_BODY:
            let newMessage = {
                id: 3,
                message: state.newMessageBody
            };

            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageBody = "";
            break;
        default:
            break;
    }

    return stateCopy;
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE_BODY});
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, newBody: text});

export default dialogsReducer;