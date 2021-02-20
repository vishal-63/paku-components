import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import "./map.css";

class Location extends Component {
  state = {};
  render() {
    // const style = {
    //   width: "500px",
    //   height: "350px",
    // };
    return (
      <div className="mapWrapper">
        <Map
          className="map"
          google={this.props.google}
          // style={style}
          zoom={14}
          initialCenter={{
            lat: 12.93213,
            lng: 77.55292,
          }}
        >
          <Marker />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBSEq_IJNSy4HV6g552uOmNf5g5B0F43lM",
})(Location);
