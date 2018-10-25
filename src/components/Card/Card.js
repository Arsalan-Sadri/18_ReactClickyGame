import React from "react";
import "./Card.css";

class Card extends React.Component {

  state = {
    selected: false
  }

  setMyState = () => {
    this.setState({
      selected: false
    });
  };

  cardSelectHandler = () => {
    if (!this.state.selected) {
      this.setState({
        selected: true
      });
      this.props.incrementScore(this.setMyState);
    } 
    else {
      this.setState({
        selected: false
      });
      this.props.resetScore();
    }
  };

  render () {
    return (
      <div className="card" onClick={this.cardSelectHandler}>
        <div className="img-container">
          <img alt={this.props.id} src={this.props.photoURL} />
        </div>
      </div>
    );
  }

}
export default Card;
