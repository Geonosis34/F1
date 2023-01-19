import React, { Fragment, useState } from "react";

import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

  import "../styles/App.css";

import Main from "./Main";
import Two_days from "./Two_days";
import Seven_days from "./Seven_days";

function App() {
  
  let [weather_2_day, setWeather_2_day] = useState([]);
  let [weather_7_day, setWeather_7_day] = useState([]);
        return (
            <BrowserRouter>
            <Routes>
            <Route exact path="/" element={<Main {...{ setWeather_2_day, setWeather_7_day }}/>} />
            <Route path="/two_days" element={<Two_days {...{weather_2_day}} />} />
            <Route path="/seven_days" element={<Seven_days {...{weather_7_day}} />} />

          </Routes>
        </BrowserRouter>
        );
    
}

export default App;