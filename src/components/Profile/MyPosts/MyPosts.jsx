import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {

    let postsElements = props.myposts.map(post => <Post message={post.message}
                                                        likesCount={post.likesCount}
                                                        key={post.id}/>);

    let newPostElement = React.createRef();

    let addPostCallback = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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