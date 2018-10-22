import "./App.css";
import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import axi from "./data";
import shakeIt from "./styles.css";

class App extends Component {
  
  shakeWrapper = {};
  childSetStateRefs = [];
  
  state = {
    photosArr: [],
    score: 0,
    topScore: 0
  };

  componentDidMount() {
    axi.then(res => {
        this.setState({
          photosArr: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  incrementScore = (childSetStateRef) => {

    if (this.state.topScore > this.state.score)
      this.setState({
        score: this.state.score + 1,
      });

    else this.setState({
      score: this.state.score + 1,
      topScore: this.state.topScore + 1
    });

    this.childSetStateRefs.push(childSetStateRef);
    this.shuffleCards();
  }

  resetScore = () => {

    this.shakeWrapper = {
      animation: shakeIt.animation
    };

    this.setState({
      score: 0
    });

    this.childSetStateRefs.forEach((ref) => ref());

    this.shuffleCards();
  }

  shuffleCards = () => {
    this.setState({
      photosArr: this.shuffleArr(this.state.photosArr)
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
    console.log("rendered!");
    return (
        <div>
            <nav></nav>
            <div className="title">
                <h1>Score: {this.state.score}</h1>
                <h1>Top score: {this.state.topScore}</h1>
            </div>
            <div style={this.shakeWrapper}>
                <Wrapper>
                  {this.state.photosArr.map(photo => (
                    <Card
                      key={photo.id}
                      id={photo.id}
                      photoURL={photo.images.fixed_height_still.url}
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