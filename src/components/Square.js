import React from "react";
import "./style.css";

function Square(props) {
  return (
    <button className={`btn ${props.winnerClass}`} onClick={props.changePlayer}>
        {props.player}
    </button>
  );
}
export default Square;
