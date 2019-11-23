import React from "react";
import Head from "next/head";
import DefaultLayout from "layouts/Default";
import Input from "components/atoms/Input";

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  // eslint-disable-next-line
  console.log(event);
  return {};
};

function Create() {
  return (
    <div>
      <Head>
        <title>Create</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <DefaultLayout>
        <div>
          <Input
            type="text"
            placeholder="Name"
            value={0}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="Location"
            value={0}
            onChange={handleChange}
          />
          <Input
            type="text"
            placeholder="GEO"
            value={0}
            onChange={handleChange}
          />
          <button type="submit">Create</button>
        </div>
      </DefaultLayout>
    </div>
  );
}

export default Create;
