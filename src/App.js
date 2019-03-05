import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import axi from "./data";
import "./App.css";
import MyModal from "./components/MyModal";
import Footer from "./components/Footer";

class App extends Component {
  setChildsStates = [];

  state = {
    photosArr: [],
    score: 0,
    topScore: 0,
    animation: false,
    showMsg: false
  };

  restartAnim = () => {
    this.setState({
      animation: false
    });

    setTimeout(() => {
      this.setState({
        animation: true
      });
    }, 0);
  };

  toggleMsg = () => {
    this.setState({
      showMsg: true
    });

    setTimeout(() => {
      this.setState({
        showMsg: false
      });
    }, 2000);
  };

  resetScore = () => {
    this.toggleMsg();

    this.restartAnim();

    this.setState({
      score: 0
    });

    this.setChildsStates.forEach(ref => ref());

    this.shuffleCards();
  };

  componentDidMount() {
    axi
      .then(res => {
        this.setState({
          photosArr: res.data.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  incrementScore = setChildState => {
    if (this.state.topScore > this.state.score)
      this.setState({
        score: this.state.score + 1
      });
    else
      this.setState({
        score: this.state.score + 1,
        topScore: this.state.topScore + 1
      });

    this.setChildsStates.push(setChildState);
    this.shuffleCards();
  };

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
    return (
      <div>
        <div className="row header">
          <div className="logo col-sm">
            <h1>Memory</h1>
            <h1>Game</h1>
          </div>
          <div className="msg col-sm">
            <h1 className={this.state.animation ? "anim" : ""}>
              {this.state.showMsg ? "Wrong choice!" : ""}
            </h1>
          </div>
          <div className="score col-sm">
            <h1>Score: {this.state.score}</h1>
            <h1>Top score: {this.state.topScore}</h1>
          </div>
        </div>

        <div className="container mb-5">
          <div className={this.state.animation ? "anim" : ""}>
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

        <Footer />

        <MyModal />
      </div>
    );
  }
}

export default App;
