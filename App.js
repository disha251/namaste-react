import React from "react";
import ReactDOM from "react-dom/client";

 


// const parent = React.createElement("div",  {id:"parent"},[
//         React.createElement("div",  {id:"child"},[
//             React.createElement("h1",  {id:"h1"},"This is Namaste React 🚀"),
//             React.createElement("h2",  {id:"h2"},"by Disha Surolia"),
//             ]
//         ),
//         React.createElement("div",  {id:"child"},[
//             React.createElement("h1",  {id:"h1"},"I am h1 tag"),
//             React.createElement("h2",  {id:"h2"},"I am h2 tag"),
//         ]
    
//     )
//     ]
    
// );
// console.log(parent);
// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// const heading = React.createElement(
//     "h1", 
//     {id: "heading"},
//      "Namaste React 🚀");
 
//below one is react element
const heading = (
    <h1 className="head" tabIndex="1">
     Namaste React using JSX 🚀
    </h1>);

//React component
//1.Class component - old way
//2.Functional component - new way -n A funtion which returns a piece of JSX is functional component.

const Title = () => (
    <h1 className="head" tabIndex="1">
     Namaste React using JSX 🚀
    </h1>
);

const number = 1000;

const elem = <span>React elem </span>;
//creating a react elemnt
const title2= (
    <h1 className="head" tabIndex="1">
        {elem}
    
     Namaste React using JSX element 🚀

    </h1>
)


//this is a component composition- putting one component inside another component
//we can put any Js code in a copmonent by using {} brackets.inside these braces we can put any js code. basically inject any js code inside the component.

const HeadingComponent = () => (
    <div id="container">
        <h2> {number + 10}   </h2> 
        {console.log(number)}
        {title2}
        {Title()}
        <Title/> 
        <h1>Namaste React functional component</h1>
    </div>
)

const HeadingComponent2 = () => <h1>Namaste React functional component</h1>

//the above 2 components are same.



console.log(heading);
// console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));





//root.render(heading); 
// root.render(jsxHeading); 

root.render(<HeadingComponent/>); 
