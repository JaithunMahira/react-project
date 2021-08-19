import React from "react";
import UserCreate from "./UserCreate";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";
class App extends React.Component {
  render() {
    return (
      <LanguageStore>
        <div className="ui container">
          <LanguageSelector />
          <ColorContext.Provider value="red">
            <UserCreate />
          </ColorContext.Provider>
        </div>
      </LanguageStore>
    );
  }
}
export default App;
