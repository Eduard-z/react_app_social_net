import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes, HashRouter} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";


const App = () => {
    return (
        <HashRouter>
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/*"
                               element={<ProfileContainer/>}/>
                        <Route path="/dialogs/*"
                               element={<DialogsContainer/>}/>
                        <Route path="/users"
                               element={<UsersContainer />}/>
                        <Route path="/login"
                               element={<LoginPage />}/>
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
};

export default App;
