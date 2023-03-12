import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/store";

const MyPosts = (props) => {

    let postsElements = props.myposts.map(post => <Post message={post.message} likesCount={post.likesCount}/>);

    let newPostElement = React.createRef();

    let addPostCallback = () => {
        // props.addPost();
        // props.dispatch({type: "ADD-POST"});
        props.dispatch(addPostCreator());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        // props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text});
        props.dispatch(updateNewPostTextCreator(text));
        console.log(text);
    };

    return (
        <div className={classes.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement} value={props.newPost} onChange={onPostChange}></textarea>
                </div>
                <div>
                    <button onClick={addPostCallback}>Add Post</button>
                </div>
            </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;