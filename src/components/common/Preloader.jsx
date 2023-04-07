import preloader from "../../assets/images/loading-loader-svgrepo-com.svg";

let Preloader = () => {
    return (
        <div>
            <img src={preloader} alt="spinner"/>
        </div>
    );
};

export default Preloader;