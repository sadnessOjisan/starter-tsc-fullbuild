import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "../Button";
import Icon from "../../assets/sample.png";

export default {
  title: "Button",
  component: Button,
  parameters: {
    info: { inline: true },
  },
};

export const Text = () => (
  <Button onClick={action("clicked")} text="Hello Button" icon={Icon}></Button>
);

Text.story = {
  name: "Text",
};

export const Emoji = () => (
  <Button onClick={action("clicked")} text="😀 😎 👍 💯"></Button>
);

Emoji.story = {
  name: "with emoji",
};
