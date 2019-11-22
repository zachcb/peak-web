import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import styles from "./styles.css";

const MapBox = ReactMapboxGl({
  accessToken:
    "pk.eyJ1IjoiemFjaGNiIiwiYSI6ImNhei1feXMifQ.XcXFZI9R6Uj9_F3g4zDOgg",
});

const coordinates = [-105.0293315, 39.7616077];

class Map extends Component {
  constructor() {
    super();

    this.state = {
      zoom: 10,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ zoom: 15 });
    }, 1000);
  }

  render() {
    console.log("render");
    return process.browser ? (
      <MapBox
        // eslint-disable-next-line
        style="mapbox://styles/zachcb/ck2cn1nld0mqs1cms10rf26y9"
        // eslint-disable-next-line
        zoom={[this.state.zoom]}
        center={coordinates}
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={coordinates} />
        </Layer>
      </MapBox>
    ) : <div>Loading...</div>;
  }
}

export default Map;
