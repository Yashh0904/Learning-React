import React from "react";
import ReactDOM from "react-dom/client";

//React Element

//JSX

const Title = () => (
  <h1 className="title" tabIndex="1">
    Hello from React
  </h1>
);

const HeadComponent = () => {
  return (
    <div id="container">
      <Title />
      <h1 className="heading">I am a Functional Component</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadComponent />);
