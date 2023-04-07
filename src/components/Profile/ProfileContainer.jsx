import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import Profile from "./Profile";
import {serUserProfile} from "../../redux/profileReducer";

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
                console.log(response);
            });
    }

    render() {
        if (this.props.isAuth === false) {
            return <Navigate to={"/login"}/>;
        }

        return (<Profile profile={this.props.profile}/>);
    }
}

function mapStateToProps(state) {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setUserProfile: (profile) => {
            dispatch(serUserProfile(profile))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);