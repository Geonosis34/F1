import React, {useState} from "react";

import "../styles/Main.css";

import Header from "./Header";
import Geo_position from "./Geo_position";
import Sity from "./Sity";
import Weather from "./Weather";

function Main (props) {
    const API_KEY = '6d4f4f9cadf4ae8ebeb14abfc0bb20bb';
    let [lat, setLat] = useState(0);
    let [lon, setLon] = useState(0);
    let [sity, setSity] = useState ('');
    let [weather_current, setWeather_current] = useState([]);
    let [weather_hourly, setWeather_hourly] = useState([]);
    let [weather_daily, setWeather_daily] = useState([]);

    props.setWeather_2_day (weather_hourly);
    props.setWeather_7_day (weather_daily);

        return (
            <main> 
                <Header {...{ lat, lon, sity, weather_current }} />
                <Geo_position {...{lat, setLat, lon, setLon }} />
                <Sity {...{API_KEY, lat, lon, sity, setSity}} />
                <Weather {...{API_KEY, lat, lon, weather_current, setWeather_current,
                weather_hourly, setWeather_hourly, weather_daily, setWeather_daily }} />
            </main>
        )
}

export default Main;