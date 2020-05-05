import React from "react";
import ReactDOM from "react-dom";
import Example from "./Example";

const App = () => {
    return (
      <div>
          <Example></Example>
      </div>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)