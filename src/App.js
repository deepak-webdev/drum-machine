import React from "react";
import "./App.css";

const keys = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];
const App = () => (
  <div id="dispaly" className="display">
    {keys.map((key, idx) => (
      <Box text={key} key={idx} />
    ))}
  </div>
);

const Box = (props) => <div className="box">{props.text}</div>;
export default App;
