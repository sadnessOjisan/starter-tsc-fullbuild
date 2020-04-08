import React from "react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { Button } from "../Button";
import Icon from "../../assets/sample.png";

export default {
  title: "Button",
  component: Button,
  parameters: {
    info: { inline: true },
  },
  decorators: [withKnobs],
};

export const Action = () => (
  <Button onClick={action("clicked")} text="Hello Button" icon={Icon}></Button>
);

Action.story = {
  name: "Action",
};

export const Text = () => <Button text="Hello Button" icon={Icon}></Button>;

Text.story = {
  name: "Text",
};

export const WithImage = () => (
  <Button
    // 第二引数はname.
    onClick={linkTo("Button", "emoji")}
    text="画像付き"
    icon={Icon}
  ></Button>
);

WithImage.story = {
  name: "WithImage",
};

export const Emoji = () => (
  <Button onClick={linkTo("Card")} text="cardに飛ぶよ😭"></Button>
);

Emoji.story = {
  name: "emoji",
};

export const Disable = () => (
  <Button
    text="knobsから切り替えてみて"
    disabled={boolean("Disabled", true)}
  ></Button>
);

Disable.story = {
  name: "disable",
};
