import React, { Fragment } from "react";
import Square from "./Square";

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(""),
      player: "X",
      winner: "",
      history: [
        {
          squares: Array(9).fill(""),
          player: "X",
        },
      ],
      step: 1,
      winnerArr: [],
    };
  }

  // 判断获胜者
  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return {
          squares: squares[a],
          winnerArr: lines[i],
        };
      }
    }
    return null;
  }

  // 切换玩家
  changePlayer(i) {
    if (this.state.winner) {
      return;
    }
    let squares = [...this.state.squares];
    let history = this.state.history.slice(0, this.state.step);
    if (squares[i]) {
      return;
    }
    let player = this.state.player === "X" ? "O" : "X";
    squares[i] = this.state.player;
    history.push({
      squares,
      player,
    });
    // setState方法是异步执行的
    this.setState({
      player,
      squares,
      history,
      step: history.length,
    });
    let winner = this.calculateWinner(squares);
    if (winner) {
      this.setState({
        winner: winner.squares,
        winnerArr: winner.winnerArr
      });
    }
  }
  getClassName(index) {
    let { winner, winnerArr } = this.state;
    if (winner) {
      for (let i = 0; i < 3; i++) {
        if (winnerArr[i] === index) {
          return "winner-square";
        }
      }
      return "";
    } else {
      return "";
    }
  }
  backTo(i) {
    this.setState((state) => {
      return {
        winner: "",
        squares: state.history[i].squares,
        player: state.history[i].player,
        step: i + 1,
      };
    });
  }
  // 每次数据更新都会触发执行
  render() {
    let { player, squares, winner, history } = this.state;
    let title = "";
    if (!winner) {
      title = <p>Next player：{player}</p>;
    } else {
      title = <p>Winner is：{winner}</p>;
    }
    return (
      <Fragment>
        <h1>井字棋游戏--React</h1>
        {title}
        <div className="flex">
          <div className="board">
            {squares.map((el, index) => {
              return (
                <Square
                  changePlayer={() => this.changePlayer(index)}
                  key={index}
                  player={el}
                  winnerClass={this.getClassName(index)}
                />
              );
            })}
          </div>
          <div className="back_step">
            <p>悔棋</p>
            {history.map((el, i) => {
              return (
                <button
                  key={i}
                  onClick={() => {
                    this.backTo(i);
                  }}
                >
                  {i === 0 ? "Back to game start" : "Back to No:" + i + " step"}
                </button>
              );
            })}
          </div>
        </div>
      </Fragment>
    );
  }
}
export default Board;
