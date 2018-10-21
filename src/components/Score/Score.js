import React from "react";
import "./Score.css";

class Score extends React.Component {
    state = {
        score: 0,
        topScore: 0
    }

    myFunc() {
        return "hello";
      }
      
    render () {
        return (
            <div className="title">
                <h1>Score: {this.state.score}</h1>
                <h1>Top score: {this.state.topScore}</h1>
            </div>
        );
    }
}

export default Score;
