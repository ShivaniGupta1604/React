

const parent = React.createElement(
    "div",
    { id: "parent" },
    [
        React.createElement("div",{ id: "child1" },
            [
                React.createElement("h1",{},"Hello world from h1 tag"),
                React.createElement("h2",{}, "Hello world from h2 tag")
            ]
        ),
        React.createElement("div",{ id: "child2" },
            [
                React.createElement("h1",{},"Hello world from h1 tag"),
                React.createElement("h2",{}, "Hello world from h2 tag")
            ]
        )
    ]
);



// const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc" },
//     "Hello world from react"
// );

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

