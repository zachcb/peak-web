import React from "react";
import { action } from "@storybook/addon-actions";
import Input from "components/atoms/Input";

export default {
  title: "Button",
};

export const text = () => <Input onClick={action("clicked")}>Hello Input</Input>;

export const emoji = () => (
  <Input onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Input>
);
