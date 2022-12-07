import { useEffect, useRef } from "react";
import "./locationInput.css";

export const LocationInput = (props) => {
    const inputRef = useRef("seoul");

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            props.setCity(inputRef.current.value);
            props.onSearchToggle();
            inputRef.current.value = "";
        }
    };

    return (
        <div className="input_box">
            <label htmlFor="search">
                <input
                    id="search"
                    className="search_location"
                    type="text"
                    placeholder="Enter your location..."
                    ref={inputRef}
                    onKeyPress={(e) => onKeyPress(e)}
                />
                <button className="searchOffBtn" onClick={props.onSearchToggle}>
                    X
                </button>
            </label>
        </div>
    );
};
