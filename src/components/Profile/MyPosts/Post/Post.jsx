import classes from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img alt="user ava"
                 src="https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg"/>
            <span>{props.message}</span>
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    );
};

export default Post;