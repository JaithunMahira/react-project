import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

const items = [
  {
    title: "what is React?",
    content: "React is a library",
  },
  {
    title: "why use React?",
    content: "React is fauvorite JS library",
  },
  {
    title: "How do you use React?",
    content: "By creating componenets",
  },
];
const App = () => {
  return (
    <div>
      {/*<Accordion items={items} />*/}
      <Search />
    </div>
  );
};

export default App;
