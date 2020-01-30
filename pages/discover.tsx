import React from "react";
import Head from "next/head";
import DiscoverTemplate from "components/templates/Discover";
import { getLocation } from "utils";

async function Discover() {
  const {
    latitude = -105.0293315,
    longitude = 39.7616077,
  } = await getLocation();
  const coordinates = [latitude, longitude];

  return (
    <React.Fragment>
      <Head>
        <title>Discover</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <DiscoverTemplate coordinates={coordinates} />
    </React.Fragment>
  );
}

export default Discover;
