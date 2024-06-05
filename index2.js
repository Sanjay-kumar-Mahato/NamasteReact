import React from "react";
import ReactDOM from "react-dom/client";
// async function getData(){
//     return "Hi How Are You?";
// }

// const data = getData();
// try{
    
// console.log(data);
// // console.log(data.json());
// console.log(typeof data);
// }catch(error){
//     console.log(Error(error)); 
// }

// const head = document.createElement("h1");
// head.innerHTML = "Hello World";
// const hello = document.getElementById("heading");
// hello.appendChild(head);

const text = React.createElement("h1",{},"Hello World with React");
const reactHeading = ReactDOM.createRoot(document.getElementById("heading"));
reactHeading.render(text);

console.log(text);
console.log(reactHeading);

/*
div #parent 
    div #child
        h3 "hi" 
        h3 "hello" 
    /div
    div #child
        h3 "vicky" 
        h3 "speaking" 
    /div
/div
*/
const heading2 = React.createElement("div",{id:"Parent", className :"DOM"},
    [React.createElement("div",{id:"Child", className : "DOM"},
        [React.createElement("h3",{id:"Head2", className : "DOM"},"hi"),
        React.createElement("h3",{id:"Head2", className : "DOM"},"hello")]
    ),
    React.createElement("div",{id:"Child", className : "DOM"},
        [React.createElement("h3",{id:"Head2", className : "DOM"},"Vicky"),
        React.createElement("h3",{id:"Head2", className : "DOM"},"speaking")]
    )]
);

const dom2 = ReactDOM.createRoot(document.getElementById("heading2"));
dom2.render(heading2);

const Heading3 = () => <h3 id="h3">Namaste React from React Function Component</h3>;
const rootHeading3 = ReactDOM.createRoot(document.getElementById("heading3"));
rootHeading3.render(<Heading3 />);
