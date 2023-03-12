import classes from "./Header.module.css";

const Header = () => {
    return (
        <header className={classes.header}>
            <img alt="react"
                 src="https://www.pngfind.com/pngs/m/685-6854970_react-logo-png-png-download-logo-png-reactjs.png"/>
        </header>
    );
};

export default Header;