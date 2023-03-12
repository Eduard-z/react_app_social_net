import classes from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img alt="sea gull"
                     src="https://varmentguard.com/uploads/permanent/f8f2098da824b77447887be569c8990d"/>
            </div>
            <div className={classes.descriptionBlock}>
                <img alt="avatar"
                     src="https://i.guim.co.uk/img/media/6ba30e96faa15f1aa2662f0da1974b233b2fce84/109_390_1831_1099/master/1831.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=15d51b434c4fdee5abb7ab57a3574f47"/>
            </div>
        </div>
    );
};

export default ProfileInfo;