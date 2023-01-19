import React, { useEffect} from "react";
import axios from "axios";

function Weather (props) {
   
    const API_2 =`https://api.openweathermap.org/data/2.5/forecast?lat=${
        props.lat}&lon=${props.lon}&units=metric&lang=en&APPID={${props.API_KEY}}`
    
    if ( props.lat != 0 && props.lon !=0 ) {     
    useEffect(() => {
            axios.get(API_2).then( res =>{
            props.setWeather_current(res.data.current);
            props.setWeather_hourly(res.data.hourly);
            props.setWeather_daily(res.data.daily);
          
        });
    },[props.lat, props.lon]);
    }
   
    console.log(props.weather_current)
    console.log(props.weather_hourly)
    console.log(props.weather_daily)

    let dat = props.weather_current.sunrise;
    console.log((new Date(dat*1000)).toLocaleDateString());

}

export default Weather;