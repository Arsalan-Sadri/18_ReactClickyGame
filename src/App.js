import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import "./App.css";
import cardsArr from "./friends.json";
import ax from "./data";

class App extends Component {
  
  state = {
    cardsArr,
    score: 0,
    topScore: 0
  };
  
componentDidMount() {
  ax.then(data => {
      console.log("data fetched!");
      console.log(data.data);
    })
    .catch(err => {
      console.log(err);
    });
}

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
      <div>
        <nav></nav>
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
      </div>
    );
  }
}

export default App;
