import React from "react";
import Head from "next/head";
import DefaultLayout from "layouts/Default";

function Home() {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <DefaultLayout>
        <p>Index page</p>
      </DefaultLayout>
    </div>
  );
}

export default Home;
