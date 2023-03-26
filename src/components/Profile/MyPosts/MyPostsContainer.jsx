import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        myposts: state.profilePage.postsData,
        newPost: state.profilePage.newPostText
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addPost: () => {dispatch(addPostCreator())},
        updateNewPostText: (text) => {dispatch(updateNewPostTextCreator(text))},
    };
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;