import loading from "../../images/loading.gif";
import "./loading.css";

const Loading = () => {
    return (
        <div className="loading_box">
            <img className="load_img" src={loading} alt="" />
        </div>
    );
};

export default Loading;
