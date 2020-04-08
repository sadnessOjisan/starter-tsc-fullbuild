import React from "react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { Button } from "../Button";
import Icon from "../../assets/sample.png";

export default {
  title: "Button",
  component: Button,
  parameters: {
    info: { inline: true },
  },
};

export const Action = () => (
  <Button onClick={action("clicked")} text="Hello Button" icon={Icon}></Button>
);

Action.story = {
  name: "Action",
};

export const Text = () => (
  <Button
    // 第二引数はname.
    onClick={linkTo("Button", "emoji")}
    text="Hello Button"
    icon={Icon}
  ></Button>
);

Text.story = {
  name: "Text",
};

export const emoji = () => (
  <Button onClick={linkTo("Card")} text="😀 😎 👍 💯"></Button>
);

emoji.story = {
  name: "emoji",
};
