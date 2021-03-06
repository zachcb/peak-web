import React from "react";
import Head from "next/head";
import ProfileTemplate from "components/templates/Profile";

function Profile() {
  return (
    <div>
      <Head>
        <title>Profile</title>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <ProfileTemplate coordinates={[-105.0293315, 39.7616077]} />
    </div>
  );
}

export default Profile;
