import React from "react";
import Head from "next/head";
import CreateTemplate from "components/templates/Create";

function Create() {
  return (
    <>
      <Head>
        <title>Create</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <CreateTemplate />
    </>
  );
}

export default Create;
