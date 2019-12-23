import React from "react";
import GoogleMapComponent from "../components/GoogleMapComponent";
import MyNav from "../components/Nav";
import Hero from "../components/Hero";
import SuggestButton from "../components/suggestButton";
import { Redirect } from "react-router-dom";

const Suggest = props => {
 
  return (
    <>
    {/* if there is no data redirect to home page */}
      { Object.keys(props.restaurant).length  === 0 && <Redirect to="/" />}
      <MyNav />
      {/* hero there is the title of the restaurant and the rate and the icons */}
      <Hero
        name={props.restaurant.name || ""}
        cat={props.restaurant.cat}
        rating={props.restaurant.rating}
      />
      {/* google map  */}
      <GoogleMapComponent restaurant={props.restaurant} />
      {/* to search for new restaurant */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          zIndex: 2,
          width: "100%"
        }}
      >
        <SuggestButton
          handleGetRandom={props.handleGetRandom}
          loading={props.loading}
          color={"danger"}
          text="اقتراح اخر"
        />
      </div>
    </>
  );
};

export default Suggest;
