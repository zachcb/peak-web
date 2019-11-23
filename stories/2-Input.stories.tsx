import React from "react";
import Input from "components/atoms/Input";

export default {
  title: "Button",
};

export const handleChange = () => "";
export const defaultInput = () => (
  <Input
    placeholder=""
    type="submit"
    value=""
    onChange={handleChange}
  />
);
