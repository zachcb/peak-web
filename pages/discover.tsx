import React from "react";
import Head from "next/head";
import DiscoverTemplate from "components/templates/Discover";
import { GeolocationContext, GeolocationProvider } from "context/Geolocation";

function Discover() {
  return (
    <React.Fragment>
      <Head>
        <title>Discover</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <GeolocationProvider>
        <GeolocationContext.Consumer>
          {({ coordinates }) => <DiscoverTemplate coordinates={coordinates} />}
        </GeolocationContext.Consumer>
      </GeolocationProvider>
    </React.Fragment>
  );
}

export default Discover;
