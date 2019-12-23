import React from "react";
import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

// Create the map so we can locate the restaurant in it

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
    // Passing the lat and lng to center the map on the location
    defaultCenter={{ lat: props.lat, lng: props.lon }}
    center={{ lat: props.lat, lng: props.lon }}
  >
    {props.isMarkerShown && (
      // after center the map show the Marker , we can customize the marker if we have the icon as svg
      <Marker
        position={{ lat: props.lat, lng: props.lon }}
     
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
  // take the lat and lng from the API and set it in the state
  setRestaurantLocation = () => {
    const { lat, lon, Ulat, Ulon } = this.props.restaurant;
    this.delayedShowMarker();
    if (this._isMounted) {
      // Some time the API return lat and lon as "A"
      //  So check if it is a number set it in the state
      // otherwise set the Ualt and Ulon to the state
      // Ulat and Ulon is the current location that we send it to the API endpoint
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
    // the Marker should appear after we set the center of the map
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
    // passing the lat and lng to Map component
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        lat={this.state.lat}
        lon={this.state.lon}
      />
    );
  }
}
