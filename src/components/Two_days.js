import React from "react";
import { Link } from "react-router-dom";

import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


import "../styles/Two_days.css";

function Two_days (props) {

    let options = {
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        weekday: 'long',
        hour: 'numeric',
    };
    
    return (
        <div>
        <header class="lenta1">
            <p>Прогноз погоды на 2 дня </p>

            
        </header> 
        <p class="ssylka1"><Link to='/'><em>Ввернуться на главную</em></Link></p>
        <Table striped bordered hover variant="dark">
        <thead class="data_now1">
        <tr>
          <th>Date/Time</th>
          <th>Temperature</th>
        </tr>
        </thead>
        <tbody class="data_now1">
        {
            props.weather_2_day.map(country =>
        <tr>
          <td>{new Date(country.dt * 1000).toLocaleDateString("ru", options)}</td>
          <td>{country.temp}</td>
         
        </tr>)
        }
        </tbody>
        </Table>
        
        </div>
    )


}

export default Two_days;