import React from "react";

import "./custom.scss";
import "./App.css";
import Suggest from "./pages/Suggest";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { getRandomRestaurant } from "./api";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: {},
      loading: false,
      showResult: false,
      lat: 26.303903001796,
      lon: 50.202211967507
    };
    this._isMount = false;
  }

  componentDidMount() {
    this._isMount = true;
    this.showCurrentLocation();
  }

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

  handleGetRandom = () => {
    const { lat, lon } = this.state;

    if (this._isMount) {
      this.setState({
        loading: true
      });
    }
    getRandomRestaurant(lon, lat)
      .then(res => {
        const restaurant = res.data;
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
          this.setState({ loading: false });
        }
        alert("خطأ في السيرفر , حاول مرة أخرى");
      });
  };

  render() {
    const { restaurant, loading, showResult } = this.state;
    return (
      <Router>
        <div className="App">
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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
