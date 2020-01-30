import React from "react";
import Head from "next/head";
import CreateTemplate from "components/templates/Create";

function Create() {
  return (
    <React.Fragment>
      <Head>
        <title>Create</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <CreateTemplate />
    </React.Fragment>
  );
}

export default Create;
