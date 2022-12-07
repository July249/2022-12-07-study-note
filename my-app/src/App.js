import React, { useEffect, useState } from "react";
import api from "./api/axios";
import "./app.css";

function App() {
    const [data, setData] = useState(null);
    const [main, setMain] = useState(null);
    const [location, setLocation] = useState("");
    const [weatherInfo, setWeatherInfo] = useState(null);
    const [city, setCity] = useState("seoul");

    useEffect(() => {
        const fetchData = async () => {
            // Read Data
            try {
                const res = await api.get(
                    `/weather?q=seoul&appid=${process.env.REACT_APP_API_KEY}`
                );
                setData(res.data);
                setMain(res.data.main);
                setLocation({
                    city: res.data.name,
                    country: res.data.sys.country,
                });
                setWeatherInfo(res.data.weather[0]);
            } catch (err) {
                if (err.response) {
                    // 응답 코드가 2xx가 아닌 경우
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error: ${err.message}`);
                }
            }
        };

        fetchData();
    }, []);

    if (!!data) {
        console.log(data);
        console.log(main);
        console.log(location);
        console.log(weatherInfo);
    }

    return (
        <article id="weather_info">
            <h1 className="city">Seoul / KR</h1>
            <section>
                <h2 className="weather_condition">Clear</h2>
                <figure className="icon"></figure>
            </section>
            <section>
                <h2>현재 온도</h2>
                <div className="cont_temp">
                    <strong className="temp">0</strong>
                    <div>
                        <span className="temp_min">최저 : 0</span>
                        <span className="temp_max">최대 : 0</span>
                    </div>
                </div>
            </section>
            <img className="load_img" src="images/loading.gif" alt="" />
        </article>
    );
}
export default App;
