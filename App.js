const parent = React.createElement("div",  {id:"parent"},[
        React.createElement("div",  {id:"child"},[
            React.createElement("h1",  {id:"h1"},"I am h1 tag"),
            React.createElement("h2",  {id:"h2"},"I am h2 tag"),
            ]
        ),
        React.createElement("div",  {id:"child"},[
            React.createElement("h1",  {id:"h1"},"I am h1 tag"),
            React.createElement("h2",  {id:"h2"},"I am h2 tag"),
        ]
    
    )
    ]
    
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);  