import React from "react";
import Cards from "./Cards";
import "./CardViewer.css";

import { Link, useParams } from "react-router-dom";

function CardViewer() {
  let { deckId } = useParams();
  let cards = Cards[deckId];
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextCard = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <h2>{deckId}</h2>
      Card {currentIndex + 1} out of {cards.length}.
      <div className="card">{cards[currentIndex]}</div>
      <br />
      <button disabled={currentIndex === 0} onClick={prevCard}>
        Prev card
      </button>
      <button disabled={currentIndex === cards.length - 1} onClick={nextCard}>
        Next card
      </button>
      <hr />
      <Link to="/">Home</Link>
    </div>
  );
}

export default CardViewer;
