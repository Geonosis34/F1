import React from "react";
import { Link } from "react-router-dom";

import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/Seven_days.css";

function Seven_days (props) {
    
    let options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    };
    
    return (
        <div>
        <header class="lenta2">
            <p>Прогноз погоды на 7 дней </p>

            
        </header> 
        
        <p class="ssylka2"><Link to='/'><em>Возврат на главную</em></Link></p>
        <Table striped bordered hover variant="dark">
        <thead class="data_now2">
        <tr>
          <th>Date/Time</th>
          <th>Temperature</th>
        </tr>
        </thead>
        <tbody class="data_now2">
        {
            props.weather_7_day.map(country =>
        <tr>
          <td>{new Date(country.dt * 1000).toLocaleDateString("ru", options)}</td>
          <td>{country.temp.day}</td>
         
        </tr>)
        }
        </tbody>
        </Table>
       

        </div>
    )


}

export default Seven_days;