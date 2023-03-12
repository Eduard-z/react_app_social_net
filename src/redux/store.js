import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE_BODY = "SEND-MESSAGE-BODY";

let store = {
    _state: {
        messagesPage: {
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
        },
        profilePage: {
            postsData: [
                {id: 1, message: "How are you?", likesCount: "0"},
                {id: 2, message: "It's my first post", likesCount: "23"},
                {id: 3, message: "", likesCount: ""},
            ],
            newPostText: "it-kamasutra.com"
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log("State changed");
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: "0"
        };

        this._state.profilePage.postsData.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    dispatch(action) {
        // this._state.profilePage = profileReducer(this._state.profilePage, action);
        // this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
        // this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: "0"
            };

            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.messagesPage.newMessageBody = action.newBody;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE_BODY) {
            let newMessage = {
                id: 3,
                message: this._state.messagesPage.newMessageBody
            };

            this._state.messagesPage.messagesData.push(newMessage);
            this._state.messagesPage.newMessageBody = "";
            this._callSubscriber(this._state);
        }
    }
};

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const sendMessageCreator = () => ({type: SEND_MESSAGE_BODY});
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, newBody: text});

export default store;