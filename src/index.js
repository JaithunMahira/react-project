//Import React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./Section3/CommentDetail";
import ApprovalCard from "./Section3/ApprovalCard";
import SeasonDisplay from "./Section4/SeasonDisplay";
import Spinner from "./Section4/Spinner";
import App from "./Section7/components/App";
import App from "./Section17/App";
import App from "./Section12/App.js";

import { Provider } from "react-redux";
import { createStore } from "redux";

import reducers from "./Section17/reducers";
//Create a React Component
const App = () => {
  //diff in jsx and html 1. styling prop 2. className 3. referencing Js variables 4. htmlFor
  const labelText = "Enter Name :";
  const buttonText = { text: "Click Me!" };

  //Section 4 Class Components - geolocation - cannot load data and display in functional components
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.log(err)
  );

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

//Class Component - section 4
class App extends React.Component {
  // constructor(props) {
  //   super(props);

  //   //this is the only time direct assignment can be done
  //   this.state = { lat: null, errorMessage: "" };
  // }

  //Alternate way to initialize state
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (!this.state.lat && this.state.errorMessage) {
      return <div> Error : {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please accept the location access request!" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}

//section7 - Imported App component from App.js

//Take the react Component and show it in screen
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
