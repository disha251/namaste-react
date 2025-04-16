import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header";
import Body from "./components/Body";



/* whenever using map function it is mandatory o pass key prop which is unique for each element. without this react wont be able to identify which dom element to modify an we will get a warning messafge */
//with key react knows exactly whih item to render without rendering the whole array list avoiding the whole load again hence improving the speed. We should never used index as the key prop as it is not unique and can change. with index as key therw will be no error or warning but we should never use index as key as mentioned before */
/* we can use id as key prop as it is unique for each element */
/* we can also use uuid as key prop as it is unique for each element */
//not using keys (not acceptable) <<<<<<< index as key prop (least preferred and throws warnings) <<<<<<< id as key prop (acceptable) <<<<<<< uuid as key prop (acceptable) */   


const AppLayout = () => {
    return (
        <div className="app>">
            <Header/>
            <Body/>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);