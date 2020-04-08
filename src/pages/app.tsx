import * as React from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import Icon from "../assets/sample.png";

export const App: React.FC = () => {
  const [isMounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div data-testid="wrapper">
      Hello, {process.env.REACT_APP_ENV}!! {isMounted ? "mounted" : "unmounted"}
      <Button text="click me" type="button" icon={Icon}></Button>
      <img src={Icon} alt="icon"></img>
      <Card text="sample"></Card>
    </div>
  );
};
