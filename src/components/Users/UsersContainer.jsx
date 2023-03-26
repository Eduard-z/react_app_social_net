import {connect} from "react-redux";
import Users from "./Users";
import {followAction, setUsersAction, unfollowAction} from "../../redux/usersReducer";

function mapStateToProps(state) {
    return {
        users: state.usersPage.users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        follow: (userId) => {dispatch(followAction(userId))},
        unfollow: (userId) => {dispatch(unfollowAction(userId))},
        setUsers: (users) => {dispatch(setUsersAction(users))},
    };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;