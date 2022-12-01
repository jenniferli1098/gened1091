import { Link, withRouter } from "react-router-dom";

function HomePage() {
  const levels = ["Mengzi", "Kongzi"];
  const decks = levels.map((deckId) => {
    return (
      <div key={deckId}>
        <Link to={`/viewer/${deckId}`}>{deckId}</Link>
      </div>
    );
  });
  return (
    <div>
      <h2>Homepage</h2>
      Welcome!
      <h3>Flashcards</h3>
      {decks}
    </div>
  );
}

export default HomePage;
