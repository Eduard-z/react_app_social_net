const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const DELETE_POST = "DELETE_POST";

let initialState = {
    postsData: [
        {id: 1, message: "How are you?", likesCount: "0"},
        {id: 2, message: "It's my first post", likesCount: "23"},
        {id: 3, message: "", likesCount: ""},
    ],
    newPostText: "it-kamasutra.com",
    profile: null
};

const profileReducer = (state=initialState, action) => {
    let stateCopy = Object.assign({}, state);

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: "0"
            };

            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = "";
            break;
            // return {
            //     ...state,
            //     postsData: {...state.postsData, newPost},
            //     newPostText: ""
            // };
        case UPDATE_NEW_POST_TEXT:
            stateCopy.newPostText = action.newText;
            break;
            // return {
            //     ...state,
            //     newPostText: action.newText
            // };
        case SET_USER_PROFILE:
            stateCopy.profile = action.profile;
            // return {...state, profile: action.profile}
            break;
        case DELETE_POST:
            stateCopy.postsData.filter(post => post.id !== action.postId);
            break;
        default:
            break;
    }

    return stateCopy;
};

export const addPostCreator = () => ({type: ADD_POST});
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const serUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const deletePost = (postId) => ({type: DELETE_POST, postId});

export default profileReducer;