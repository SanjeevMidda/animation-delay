import "./index.css";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState(false);

  let circleOneStyles = {
    animation: status
      ? "moveForwards 1s forwards"
      : "moveBackwards 1s backwards",
    backgroundColor: "pink",
  };

  let circleTwoStyles = {
    animation: status
      ? "moveForwardsTwo 1s 1s forwards"
      : "moveBackwardsTwo 1s 1s backwards",
    backgroundColor: "grey",
  };

  let circleThreeStyles = {
    animation: status
      ? "moveForwardsThree 1s 2s forwards"
      : "moveBackwardsThree 1s 2s backwards",
    backgroundColor: "brown",
  };

  console.log(circleOneStyles.animation);

  return (
    <div className="App" onClick={() => setStatus(!status)}>
      <div className="circle circleOne" style={circleOneStyles}></div>
      <div className="circle circleTwo" style={circleTwoStyles}></div>
      <div className="circle circleThree" style={circleThreeStyles}></div>
    </div>
  );
}

export default App;
