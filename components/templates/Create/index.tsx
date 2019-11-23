import React from "react";
import DefaultLayout from "layouts/Default";
import CreateSearchForm from "components/organisms/CreateSearchForm";

type Props = {

};

function Create() {
  return (
    <DefaultLayout>
      <h1>
        <span className="text-2xl font-black tracking-widest leading-loose">
          create search
        </span>
      </h1>

      <CreateSearchForm />
    </DefaultLayout>
  );
}

export default Create;
