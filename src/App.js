import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import cardsArr from "./friends.json";
import "./App.css";

class App extends Component {

  state = {
    cardsArr,
    score: 0,
    topScore: 0
  };

  incrementScore = () => {
    this.setState({
      score: this.state.score + 1,
      topScore: this.state.topScore + 1
    });
    this.shuffleCards();
  }

  resetScore = () => {
    this.setState({
      score: 0
    });
    this.shuffleCards();
  }

  shuffleCards = () => {
    this.setState({
      cardsArr: this.shuffleArr(this.state.cardsArr)
    });
  };

  shuffleArr(arr) {
    var j, x, i;
    for (i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = arr[i];
        arr[i] = arr[j];
        arr[j] = x;
    }
    return arr;
}

  render() {
    return (
      <div className="container">
        <Wrapper>
          <div className="title">
              <h1>Score: {this.state.score}</h1>
              <h1>Top score: {this.state.topScore}</h1>
          </div>
          {this.state.cardsArr.map(friend => (
            <Card
              id={friend.id}
              key={friend.id}
              image={friend.image}
              name={friend.name}
              incrementScore={this.incrementScore}
              resetScore={this.resetScore}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
