import * as React from "react";

export const App = () => {
  return <div>Hello, {process.env.REACT_APP_ENV}!!</div>;
};
