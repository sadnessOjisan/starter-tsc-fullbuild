import React from "react";
import { Card } from "../Card";

export default {
  title: "Card",
  component: Card,
  parameters: {
    info: { inline: true },
  },
};

export const Action = () => <Card text="Hello Card"></Card>;

Action.story = {
  name: "Action",
};
