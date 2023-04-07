import React from "react";
import axios from "axios";
import {connect} from "react-redux";
import Header from "./Header";
import {setUserDataAction} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios
            .get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                    console.log(response);
                }
            });
    }

    render() {
        return(<Header {...this.props} />)
    }
}

function mapStateToProps(state) {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    };
}

function mapDispatchToProps(dispatch) {
    return {setAuthUserData: (a,b,c) => {dispatch(setUserDataAction(a,b,c))}};
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);