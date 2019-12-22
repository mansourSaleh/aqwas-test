import React from "react";
import GoogleMapComponent from "../components/GoogleMapComponent";
import MyNav from "../components/Nav";
import Hero from "../components/Hero";
import SuggestButton from "../components/suggestButton";
import { Redirect } from "react-router-dom";

const Suggest = props => {
  return (
    <>
      {!props.restaurant.name && <Redirect to="/" />}
      <MyNav />
      <Hero
        name={props.restaurant.name}
        cat={props.restaurant.cat}
        rating={props.restaurant.rating}
      />
      <GoogleMapComponent restaurant={props.restaurant} />
      <div
        style={{
          position: "absolute",
          bottom: 0,
          zIndex: 2,
          // backgroundColor: "rgba(255, 255, 255, 0.8)",
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
