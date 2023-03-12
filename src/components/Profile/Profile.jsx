import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return (
        <div className={classes.content}>
            Main Content
            <ProfileInfo/>
            <MyPosts myposts={props.state.postsData} newPost={props.state.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;