import React from "react";

import "./custom.scss";
import "./App.css";
import Suggest from "./pages/Suggest";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getRandomRestaurant } from "./api";
import Error from "./pages/Error";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {},
      loading: false,
      showResult: false,
      // Default location for the map
      lat: 26.303903001796,
      lon: 50.202211967507
    };
    this._isMount = false;
  }

  componentDidMount() {
    this._isMount = true;
    this.showCurrentLocation();
  }

  // Get the current location
  showCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        if (this._isMount) {
          this.setState({
            lat: position.coords.latitude,
            lon: position.coords.longitude
          });
        }
      });
    } else {
      console.log("error");
    }
  };

  componentWillUnmount() {
    this._isMount = false;
  }

  // When user click "اقتراح"
  handleGetRandom = () => {
    const { lat, lon } = this.state;

    if (this._isMount) {
      this.setState({
        loading: true
      });
    }
    // Calling the API
    getRandomRestaurant(lon, lat)
      .then(res => {
        const restaurant = res.data;
        // Handling Errors from the API
        if (restaurant.error === "No results found") {
          alert("خطأ في السيرفر , حاول مرة أخرى");
          this.setState({ loading: false });
          return;
        }
        if (this._isMount) {
          this.setState({
            restaurant,
            loading: false,
            showResult: true
          });
        }
      })
      .catch(error => {
        console.error(error);
        if (this._isMount) {
          this.setState({ loading: false, showResult: false });
        }
        alert("خطأ في السيرفر , حاول مرة أخرى");
      });
  };

  render() {
    const { restaurant, loading, showResult } = this.state;
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <Home
                {...props}
                showResult={showResult}
                loading={loading}
                handleGetRandom={this.handleGetRandom}
              />
            )}
          />
          <Route
            exact
            path="/suggest"
            render={props => (
              <Suggest
                {...props}
                restaurant={restaurant}
                showResult={showResult}
                loading={loading}
                handleGetRandom={this.handleGetRandom}
              />
            )}
          />
          {/* In case the user type any thing in the URL  field it will show hem this custom error page */}
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default App;
