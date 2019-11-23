import React from "react";
import Input from "components/atoms/Input";
import Link from "next/link";
import styles from "./styles.css";

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  // eslint-disable-next-line
  console.log(event);
  return {};
};

type Props = {
  href: string;
};

function CreateSearchForm() {
  return (
    <form>
      <Input
        type="email"
        placeholder="jane@example.com"
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="location"
        onChange={handleChange}
      />
      <Input
        type="text"
        placeholder="radius"
        onChange={handleChange}
      />
      <button
        type="submit"
        className="w-full mb-3 p-2 font-black tracking-wide bg-black text-white b-black-500 placeholder-gray-600 border-gray-800 border-4 rounded shadow"
      >
        create
      </button>
    </form>
  );
}

export default CreateSearchForm;
