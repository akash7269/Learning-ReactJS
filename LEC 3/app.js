import React from "react";
import ReactDOM from "react-dom/client";

// React Element => Object => HTMLElement(render)

const heading = React.createElement(
    "h1", {id: "heading"},
    "Namaste React 🚀"
);

// React Component
// 1 - Class Based Component - OLD
// 2 - Functional Component - NEw

// React Functional Component

const HeadingComponent = () => {
    return <h1 className="heading">Namaste React Functional</h1>
};

const Title = () => (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX 🚀
    </h1>
);

// Component Composition
const HeadingComponent2 = () => (
    <div id="container">
        <Title/>
        <h1 className="heading">Namaste React Functional Component 2</h1>
    </div>
);


const title = (
    <h1 className="head" tabIndex="5">
        Namaste React using JSX 🚀
    </h1>
);

const number = 10000;

const HeadingComponent3 = () => (
    <div id="container">
        <h2>{number}</h2>
        <h2>{300+400}</h2>
        {title}
        <Title></Title>
        {Title()}
        <h1 className="heading">Namaste React Functional Component 2</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent3 />);
