import React from "react";
import Head from "next/head";
import DefaultLayout from "layouts/Default";
import Input from "components/atoms/Input";

const Create = () => (
  <div>
    <Head>
      <title>Create</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <DefaultLayout>
      <div>
        <Input type="text" placeholder="Name" />
        <Input type="text" placeholder="Location" />
        <Input type="text" placeholder="GEO" />
        <button type="submit">Create</button>
      </div>
    </DefaultLayout>
  </div>
);

export default Create;
