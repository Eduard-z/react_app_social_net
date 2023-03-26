import classes from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={classes.content}>
            Main Content
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;