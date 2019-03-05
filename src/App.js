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
      <React.Fragment>


        <div className="jumbotron pb-0">
          <div className="row">
            <div className="col-md text-center text-sm-left">
              <h1>Memory Game</h1>
            </div>
            <div className="col-md warning-col">
              <h1 className={this.state.animation ? "animation" : ""}>
                {this.state.showMsg ? "Wrong choice!" : ""}
              </h1>
            </div>
            <div className="col-md text-right">
              <h1>Score: {this.state.score}</h1>
              <h1>Top score: {this.state.topScore}</h1>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT WRAPPER */}
        <div className="container mb-5">
          <div className={this.state.animation ? "animation" : ""}>
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
      </React.Fragment>
    );
  }
}

export default App;
