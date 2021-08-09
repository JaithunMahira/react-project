//Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

//Create a React Component
const App = () => {
  //diff in jsx and html 1. styling prop 2. className 3. referencing Js variables 4. htmlFor
  const labelText = "Enter Name :";
  const buttonText = { text: "Click Me!" };
  return (
    <body>
      {/* Section 1 and 2*/}
      <div>
        <label className="label" htmlFor="name">
          {labelText}
        </label>
        <input id="name" type="text" />
        <button style={{ backgroundColor: "blue", color: "white" }}>
          {buttonText.text}
        </button>
      </div>

      {/*Section 3 - loading comments 1. Added faker to load data 2. Added
      semantic.min.css for css styling 3. Added CommentDetail.js/ Components
      Nesting */}
      <div className="ui container comments">
        <ApprovalCard>
          <CommentDetail
            author="Jaithun"
            profilePic={faker.image.avatar()}
            timeAgo="Today at 3:00 am"
            comment="Good!"
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            author="Jumana"
            profilePic={faker.image.avatar()}
            timeAgo="Today at 6:00 am"
            comment="Nice Post!"
          />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
            author="Rahman"
            profilePic={faker.image.avatar()}
            timeAgo="Today at 9:00 pm"
            comment="Excellent!"
          />
        </ApprovalCard>
      </div>
    </body>
  );
};

//Take the react Component and show it in screen
ReactDOM.render(<App />, document.querySelector("#root"));
