import React from "react";
import "./styles.css";
import { geolocated } from "react-geolocated";
import axios from "axios";
export default class App extends React.Component {
  componentDidMount = () => {
    console.log("mounted");
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayLocationInfo);
    }

    function displayLocationInfo(position) {
      const lng = position.coords.longitude;
      const lat = position.coords.latitude;

      axios
        .post("https://blooming-badlands-24835.herokuapp.com/location", {
          lat: "asd",
          long: "asd"
        })
        .then(data => {
          console.log("thank you for your location data");
          console.log(data.data);
        })
        .catch(data => {
          console.log(data);
        });
    }
  };
  render() {
    return (
      <div className="App">
        <img src="https://qph.fs.quoracdn.net/main-qimg-8c2b3992e3d041bb85d6effa28af3806" />{" "}
      </div>
    );
  }
}
geolocated();
