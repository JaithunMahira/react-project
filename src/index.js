//Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//Create a React Component
const App = () => {

    //diff in jsx and html 1. styling prop 2. className 3. referencing Js variables 4. htmlFor
    const labelText = "Enter Name :";
    const buttonText = {text : "Click Me!"};
    return (
        <div > 
            <label className="label" htmlFor="name" > {labelText} </label>
            <input id="name" type="text" />
            <button style={{backgroundColor : 'blue', color : 'white'}}> {buttonText.text} </button>
        </div>
    );
}

//Take the react Component and show it in screen
ReactDOM.render(<App />, document.querySelector('#root'));
