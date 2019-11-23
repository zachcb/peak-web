import React, { Component } from "react";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
// import styles from "./styles.css";

const MapBox = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoiemFjaGNiIiwiYSI6ImNhei1feXMifQ.XcXFZI9R6Uj9_F3g4zDOgg",
});

type Props = {
  label: string;
  coordinates: [number, number];
};

type State = {
  center: [number, number];
  zoom: number;
};

class Map extends Component<Props, State> {
  static defaultProps: Props = {
    label: "",
    coordinates: [0, 0],
  };

  public readonly state: State = {
    center: this.props.coordinates,
    zoom: 10,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ zoom: 15 });
    }, 1000);
  }

  render() {
    const { center, zoom } = this.state;

    return process.browser ? (
      <MapBox
        // eslint-disable-next-line
        style="mapbox://styles/zachcb/ck2cn1nld0mqs1cms10rf26y9"
        zoom={[zoom]}
        center={center}
        containerStyle={{
          height: "100vh",
          width: "100vw",
        }}
      >
        <Layer
          type="symbol"
          id="marker"
          layout={{ "icon-image": "marker-15" }}
        >
          <Feature coordinates={center} />
        </Layer>
      </MapBox>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default Map;
