import React, { useEffect, useState } from "react";

function Geo_position (props) {

  useEffect(() => {
  if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
      const { coords } = position;
      let Lat = coords.latitude;
      let Lon = coords.longitude;
      props.setLat (Lat);
      props.setLon (Lon);
      console.log (coords.latitude, coords.longitude);
      
    });
  }
  }, []);


}

export default Geo_position;