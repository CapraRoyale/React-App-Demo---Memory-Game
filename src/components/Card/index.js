import React from "react";

const Cards = props => (

  <div className="card" onClick={() => props.clickedImage(props.id)}>
    <div className="img-container">
      <picture>
        <source srcSet={props.svg} type="image/svg+xml"/>
          <img src={props.image} className="img-fluid img-thumbnail" alt={props.letter}/>
      </picture>
    </div>
  </div>

);

export default Cards;