import React from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import DefaultLayout from "layouts/Default";

const Map = dynamic(() => import("../components/organisms/Map"),
  { ssr: false });

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <DefaultLayout>
      <Map label="primary-map" coordinates={[-105.0293315, 39.7616077]} />
    </DefaultLayout>
  </div>
);

export default Home;
