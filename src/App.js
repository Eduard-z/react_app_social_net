import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile"
                               element={<Profile
                                   state={props.appState.profilePage}
                                   dispatch={props.dispatch}/>}/>
                        <Route path="/dialogs/*"
                               element={<Dialogs
                                   state={props.appState.messagesPage}
                                   dispatch={props.dispatch}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
