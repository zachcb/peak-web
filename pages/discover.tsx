import React from "react";
import Head from "next/head";
import DiscoverTemplate from "components/templates/Discover"

const Discover = () => (
  <>
    <Head>
      <title>Discover</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <DiscoverTemplate
      coordinates={[-105.0293315, 39.7616077]}
    ></DiscoverTemplate>
  </>
);

export default Discover;
