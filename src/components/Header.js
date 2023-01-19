import React from "react";

import { Link } from "react-router-dom";

import "../styles/Header.css";

function Header (props) {
   
    return (
        <div class="fon">
        <header class="lenta">
            <p>{props.sity} </p>
            <p>{'Координаты места ('}{props.lat.toFixed(3)}{'/'}{props.lon.toFixed(3)})</p>
        </header> 
            <span class="data_now">
            <p class="ssylka"><Link to='/two_days'><em>Погода на 2 дня</em></Link></p>
            <p class="ssylka"><Link to='/seven_days'><em>Погода на 7 дней</em></Link></p>
            <p class="zagolovok">Текущая погода</p>
            <p>{'Температура ->'}{props.weather_current.temp}</p>
            <p>{'Ощущается ->'}{props.weather_current.feels_like }</p>
            <p>{'Влажность ->'}{props.weather_current.humidity}</p>
            <p>{'Давление ->'}{props.weather_current.pressure}</p>
            <p>{'Скорость ветра ->'}{props.weather_current.wind_speed}</p>
            <p>{'Направление ветра->'}{props.weather_current.wind_deg}</p>
            </span>
        </div>
    )


}

export default Header;