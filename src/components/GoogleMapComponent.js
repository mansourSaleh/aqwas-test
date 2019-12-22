import React from "react"
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `500px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: props.restaurant.lat, lng: props.restaurant.lon }}
  >
    {props.isMarkerShown && <Marker position={{ lat: props.restaurant.lat, lng: props.restaurant.lon }} onClick={props.onMarkerClick} />}
  </GoogleMap>
)

export default class Googlemap extends React.PureComponent {
  state = {
    isMarkerShown: false,
  }

  componentDidMount() {
    this.delayedShowMarker()
  }

  delayedShowMarker = () => {
    setTimeout(() => {
      this.setState({ isMarkerShown: true })
    }, 3000)
  }

  handleMarkerClick = () => {
    this.setState({ isMarkerShown: false })
    this.delayedShowMarker()
  }

  render() {
      console.log(this.props.restaurant)
    return (
      <MyMapComponent
        isMarkerShown={this.state.isMarkerShown}
        restaurant={this.props.restaurant}
        // onMarkerClick={this.handleMarkerClick}
      />
    )
  }
}