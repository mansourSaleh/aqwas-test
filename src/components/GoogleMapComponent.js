import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100vh` }} />,
    mapElement: <div style={{ height: `100%` }} />
  }),
  withScriptjs,
  withGoogleMap
)(props => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: props.lat, lng: props.lon }}
    center={{ lat: props.lat, lng: props.lon }}
  >
    {props.isMarkerShown && (
      <Marker
        position={{ lat: props.lat, lng: props.lon }}
        onClick={props.onMarkerClick}
      />
    )}
  </GoogleMap>
));

export default class Googlemap extends React.PureComponent {
  state = {
    isMarkerShown: false,
    lat: 26.303903001796,
    lon: 50.202211967507
  };
  _isMounted = false;

  componentDidMount() {
    this._isMounted = true;
    this.delayedShowMarker();
    this.setRestaurantLocation();
  }
  componentDidUpdate() {
    this.setRestaurantLocation();
  }
  setRestaurantLocation = () => {
    const { lat, lon, Ulat, Ulon } = this.props.restaurant;
    this.delayedShowMarker();
    if (this._isMounted) {
      if (typeof lat == "number") {
        this.setState({
          lat,
          lon
        });
      } else {
        this.setState({
          lat: parseFloat(Ulat),
          lon: parseFloat(Ulon)
        });
      }
    }
  };
  delayedShowMarker = () => {
    setTimeout(() => {
      if (this._isMounted) {
        this.setState({ isMarkerShown: true });
      }
    }, 3000);
  };
  componentWillUnmount() {
    this._isMounted = false;
  }

  handleMarkerClick = () => {
    if (this._isMounted) {
      this.setState({ isMarkerShown: false });
    }
    this.delayedShowMarker();
  };

  render() {
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        lat={this.state.lat}
        lon={this.state.lon}
      />
    );
  }
}
