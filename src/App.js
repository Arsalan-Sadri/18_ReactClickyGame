import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friendsArr from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friendsArr
  };

  removeFriend = id => {

    const newFriends = this.shuffleArr(this.state.friendsArr);
    // const newFriends = this.state.friendsArr.filter(friend => friend.id !== id);
    
    this.setState({
      friendsArr: newFriends 
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

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      // <div className="container">

      <Wrapper>
        <Title>Friends List</Title>
        {this.state.friendsArr.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
      // </div>
    );
  }
}

export default App;
