import classes from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            <div>
                <img alt="sea gull"
                     src="https://varmentguard.com/uploads/permanent/f8f2098da824b77447887be569c8990d"/>
            </div>
            <div className={classes.descriptionBlock}>
                <img alt="avatar" src={props.profile.photos.large} />
            </div>
        </div>
    );
};

export default ProfileInfo;