import * as React from "react";

export const App: React.FC = () => {
  const [isMounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div data-testid="wrapper">
      Hello, {process.env.REACT_APP_ENV}!! {isMounted ? "mounted" : "unmounted"}
    </div>
  );
};
