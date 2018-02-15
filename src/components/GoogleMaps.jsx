import React from "react";

import ReactGoogleMapLoader from "react-google-maps-loader"
import ReactGoogleMap from "react-google-map"

import '../styles/GoogleMap.css';


const GoogleMaps = (props) =>
    <ReactGoogleMapLoader
        params={{
            key: "",
            libraries: "places,geometry",
        }}
        render={googleMaps =>
            googleMaps && (
              <div className = 'map'>
                <ReactGoogleMap
                  googleMaps={googleMaps}
                  center={{
                    lat: props.lat,
                    lng: props.lon}}
                  zoom={8}
                />
              </div>
            )}
    />

export default GoogleMaps;
