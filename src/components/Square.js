import React from "react";
import "./style.css";
// class Square extends React.Component {
//   render() {
//     let { value } = this.props;
//     return (
//       <button className="btn" onClick={this.props.onClick}>
//         {value}
//       </button>
//     );
//   }
// }
function Square(props) {
  return (
    <button className={`btn ${props.winnerClass}`} onClick={props.changePlayer}>
      {props.value}
    </button>
  );
}
export default Square;
