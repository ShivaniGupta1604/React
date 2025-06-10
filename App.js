import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement(
//     "div",
//     { id: "parent" },
//     [
//         React.createElement("div",{ id: "child" },
//             [
//                 React.createElement("h1",{},"Hello world from h1 tag"),
//                 React.createElement("h2",{}, "Hello world from h2 tag")
//             ]
//         ),
//         React.createElement("div",{ id: "child2" },
//             [
//                 React.createElement("h1",{},"Hello world from h1 tag"),
//                 React.createElement("h2",{}, "Hello world from h2 tag")
//             ]
//         )
//     ]
// );

//console.log(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "This is a React heading"
// );

// console.log(heading);

// JSX: HTML-like OR XML-like syntax

// JSX(transpiled before it reaches the JS engine) - PARCEL - Babel

// JSX => Bable transpiles it to React.createElement => ReactElement- JS Object => HTML Element(render)

// if we write JSX in single line we do not need to wrap it in ()
// const jsxHeading = <h1 className="head" tabIndex="1">This is a JSX heading</h1>;

// if we write JSX in multiple line we need to wrap it in ()

//React Element
const heading = (
  <h1 className="head" tabIndex="1">
    This is a JSX heading
  </h1>
);

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading);

//React Component
//1. Class Based Component - Old way
//2. Functional Component - New way

//React Functinal Component  --> It's a normal JavaScriptfunction which returns some JSX


//Component Composition

const Title = () => (
  <h1 className="head" tabIndex="5">
    This is a title component!
  </h1>
);

const titleElement = (
    <h1 className="head" tabIndex="5">
      This is a title element!
    </h1>
  );

const number=100;

const HeadingComponent = () => (
  <div id="container">
    <Title />
    {number}
    {titleElement}
    <h2>{number}</h2>
    <h2>{16+19}</h2>
    {console.log("Shivani")}
    <h1 className="heading">This is a functional component!</h1>
  </div>
);

// The above function headingComponent can be also written as below -> headingComponent2 because it has a single line but
// if we write it in mutliple lines we need to wrap it in () like the above -> HeadingComponent

// const headingComponent2 = () => <h1>This is a functional component</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
