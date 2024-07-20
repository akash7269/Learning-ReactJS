import React from "react";
import ReactDOM from "react-dom/client";

// React Element => Object => HTMLElement(render)

const heading = React.createElement(
    "h1", {id: "heading"},
    "Namaste React 🚀"
);

// JSX (transpiled before it reaches th JS) - PARCEL - Babel
// JSX => Babel transpile it to React.createElement => ReactElement-JS Object => HTMLElement(render)

const jsxHeading = <h1 id="heading">Namaste React using JSX 🚀</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);