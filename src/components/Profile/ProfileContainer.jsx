import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
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
        return (<Profile profile={this.props.profile}/>);
    }
}

function mapStateToProps(state) {
    return {
        profile: state.profilePage.profile
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setUserProfile: (profile) => {
            dispatch(serUserProfile(profile))
        }
    };
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(ProfileContainer);