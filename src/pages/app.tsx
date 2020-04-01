import * as React from "react";
import { Button } from "../components/Button";

export const App: React.FC = () => {
  const [isMounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div data-testid="wrapper">
      Hello, {process.env.REACT_APP_ENV}!! {isMounted ? "mounted" : "unmounted"}
      <Button text="click me" type="button"></Button>
    </div>
  );
};
