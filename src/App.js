import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";


const App = () => {
    return (
        <BrowserRouter>
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
        </BrowserRouter>
    );
};

export default App;
