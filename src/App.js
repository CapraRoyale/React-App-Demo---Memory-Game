import React, { Component } from "react";
import letters from "./cards.json";
import TitleCard from "./components/TitleCard";
import Card from "./components/Card";
import Container from "./components/Container";
import Row from "./components/Row";

// shuffle upon each click
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

class App extends Component {
  state = {
    letters,
    score: 0,
    highScor: 0,
    showAlert: 0,
    showSuccess: 0,
    isClicked: []
  };

  clickedImage = id => {
    // update variables according to component state
    let isClicked = this.state.isClicked;
    let score = this.state.score;
    let highScor = this.state.highScor;
    this.setState({
      showAlert: 0
    });

    // if the clicked image has an id of the indexed letters
    if (isClicked.indexOf(id) === -1) {
      // push that id into that id into the array to be stored
      isClicked.push(id);
      console.log(isClicked);
      // run the score function
      this.handleIncrement();
      // run the reshuffle function after each click
      this.makeShuffle();
    } else if (this.state.score === 12) {
      // alert player wins
      this.setState({
        showSuccess: 1,
        score: 0,
        isClicked: []
      });
    } else {
      // alert player loss
      this.setState({
        score: 0,
        isClicked: []
      });
      console.log("duplicate");
      this.setState({
        showAlert: 1
      });
    }

    if (score > highScor) {
      this.setState({
        highScor: score
      });
    }
  };

  // handleIncrement increases this.state.score by 1
  handleIncrement = () => {
    // setState updates a components states
    this.setState({ score: this.state.score + 1 });
  };

  // shuffle up images
  makeShuffle = () => {
    this.setState({ letters: shuffle(letters) });
  };

  render() {
    return (
      <Container>
        <div
          className="alert alert-danger"
          style={{ opacity: this.state.showAlert }} >
          Oops! Start again!
          </div>
        <div
          className="alert alert-success"
          style={{ opacity: this.state.showSuccess }}        >
          Well done!
          </div>
        <TitleCard
          title="ASL"
          score={this.state.score}
          highScor={this.state.highScor} />
        <Row>
          {this.state.letters.map(letter => (
            <div className="col-3">
              <Card
                key={letter.id}
                id={letter.id}
                image={letter.image}
                clickedImage={this.clickedImage} />
            </div>
          )
          )}
        </Row>
      </Container>
    );
  }
}

export default App;