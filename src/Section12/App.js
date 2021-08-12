import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";
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

const options = [
  {
    label: "The colour Red",
    value: "red",
  },
  {
    label: "The colour Blue",
    value: "blue",
  },
  {
    label: "The colour Green",
    value: "green",
  },
];
const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropDown, setShowDropDown] = useState(true);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <button onClick={() => setShowDropDown(!showDropDown)}>
          Toggle Dropdown
        </button>
        {showDropDown ? (
          <div>
            <Dropdown
              selected={selected}
              onSelectedChange={setSelected}
              options={options}
            />
            <div
              className="content"
              style={{ color: `${selected.value}` }}
            >{`the text is ${selected.value}`}</div>
          </div>
        ) : null}
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
