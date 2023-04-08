import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {connect} from "react-redux";

function mapStateToProps(state) {
    return {
        dialogsPage: state.messagesPage
    };
}

function mapDispatchToProps(dispatch) {
    return {
        updateNewMessageBody: (body) => {dispatch(updateNewMessageBodyCreator(body))},
        sendMessage: () => {dispatch(sendMessageCreator())},
    }
}

const DialogsContainer = compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs);

export default DialogsContainer;