import React from "react";
import "./FriendCard.css";

class FriendCard extends React.Component {

  state = {
    selected: false
  }

  cardSelectHandler = id => {

    if (!this.state.selected) {

      this.setState({
        selected: true
      });

      this.props.refToScore.setState({
        score: this.score +1,
        topScore: this.topScore +1
      });

      this.props.shuffleCards();
    }

    else {


    }
  };

  render () {
    return (
      <div className="card" onClick={() => this.cardSelectHandler(this.props.id)}>
        <div className="img-container">
          <img alt={this.props.name} src={this.props.image} />
        </div>
      </div>
    );
  }

}
export default FriendCard;
