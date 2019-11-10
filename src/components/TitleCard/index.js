import React from "react";

function TitleCard(props) {
  return (
    <header className="scoreB">
      <div className="row">
        <div className="col"><h1>{props.title}</h1></div>
        <div className="col"><h6>High Score {props.score}</h6></div>
        <div className="col"><h6>Current Score: {props.topScore}</h6></div>
      </div>
      <div className="row">
      <div className="col">
      <h6>Try to remember each Finger-Spelling Hand Sign and avoid clicking the same sign twice!</h6></div>
      </div>
    </header>
  );
}

export default TitleCard;
