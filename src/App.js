import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Score from "./components/Score";
import cardsArr from "./friends.json";
import "./App.css";

class App extends Component {

  state = {
    cardsArr
  };

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
      // <div className="container">
      <Wrapper>
        <Score 
        ref={arg => {
          this.refToScore = arg;
          }
        }
        />
        {this.state.cardsArr.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            shuffleCards={this.shuffleCards}
            refToScore={this.refToScore}
          />
        ))}
      </Wrapper>
      // </div>
    );
  }
}

export default App;
