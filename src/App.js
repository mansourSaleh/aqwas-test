import React from "react";

import "./custom.scss";
import "./App.css";
import Suggest from "./pages/Suggest";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { getRandomRestaurant } from './api'

class App extends React.Component {


 constructor(props){
   super(props)
   this.state = {
    restaurant: {
      error: "no",
      name: "JOLT (جولت)",
      id: "5b0acd468173cb002c6aa61d",
      link: "https://foursquare.com/v/5b0acd468173cb002c6aa61d",
      cat: "Coffee Shop",
      catId: "4bf58dd8d48988d1e0931735",
      rating: "-1",
      lat: 26.303903001796,
      lon: 50.202211967507,
      Ulat: 50.2017993,
      Ulon: 26.2716025,
      open: "",
      image: []
    },
    loading: false,
    showResult: false
   }
 }

 handleGetRandom = () => {
console.log("dddd")
this.setState({
  loading: true
})
  getRandomRestaurant()
    .then(res => {
      console.log(res.data)
      const restaurant = res.data
     this.setState({
      restaurant, loading: false, showResult: true
     },)
     
    })
    .catch(error => {
      console.error(error)
    })
 

 
}

render(){
  const { restaurant, loading, showResult} = this.state;
  return (
    <Router>
    <div className="App">
   

    <Switch>
      <Route exact path="/" render={(props) => (
        <Home {...props} showResult={showResult} loading={loading} handleGetRandom={this.handleGetRandom} />
      )} />
      <Route exact path="/suggest"  render={(props) => (
        <Suggest {...props} restaurant={restaurant} />
      )} /> 
    </Switch>
    </div>
    </Router>
  );
      }
}

export default App;
