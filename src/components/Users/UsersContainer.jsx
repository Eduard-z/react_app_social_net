import React from "react";
import {connect} from "react-redux";
import {
    followAction,
    setCurrentPageAction,
    setTotalUsersCountAction,
    setUsersAction, toggleIsFetchingAction,
    unfollowAction
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {usersAPI} from "../../redux/api";

class UsersAPIComponent extends React.Component {
    constructor(props) {
        super(props);
        this.clickFollow = this.clickFollow.bind(this);
        this.clickUnfollow = this.clickUnfollow.bind(this);
    }

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
    }

    clickFollow(userId) {
        usersAPI.followUser(userId).then(response => {
            if (response.data.resultCode === 0) {
                this.props.follow(userId);
            }
        });
    }

    clickUnfollow(userId) {
        usersAPI.unfollowUser(userId).then(response => {
            if (response.data.resultCode === 0) {
                this.props.unfollow(userId);
            }
        });
    }

    render() {
        return (<>
                {this.props.isFetching ? <Preloader/> : null}
                <Users totalUsersQuantity={this.props.totalUsersQuantity}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       clickFollow={this.clickFollow}
                       clickUnfollow={this.clickUnfollow}
                       users={this.props.users}
                       unfollow={this.props.unfollow}
                       follow={this.props.follow}
                       isFetching={this.props.isFetching}/>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersQuantity: state.usersPage.totalUsersQuantity,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        follow: (userId) => {
            dispatch(followAction(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAction(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAction(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAction(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAction(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingAction(isFetching))
        },
    };
}

const UsersContainer = compose(withAuthRedirect, connect(mapStateToProps, mapDispatchToProps))(UsersAPIComponent);

export default UsersContainer;