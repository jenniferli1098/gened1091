import React from "react";
import Cards from "./Cards";
import "./CardViewer.css";

import { Link, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const Card = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: 300,
  lineHeight: "60px",
}));

const darkTheme = createTheme({ palette: { mode: "dark" } });
const lightTheme = createTheme({ palette: { mode: "light" } });

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
    <Grid container spacing={3} justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <h2>{deckId}</h2>
        Card {currentIndex + 1} out of {cards.length}.
      </Grid>
      <Grid item xs={2}>
        <button disabled={currentIndex === 0} onClick={prevCard}>
          Prev card
        </button>
      </Grid>
      <Grid item xs={8} md={6}>
        <Card elevation={3}>{cards[currentIndex]}</Card>
      </Grid>
      <Grid item xs={2}>
        <button disabled={currentIndex === cards.length - 1} onClick={nextCard}>
          Next card
        </button>
      </Grid>
      <Grid item xs={8}>
        {" "}
        <Link to="/">Home</Link>
      </Grid>
    </Grid>
  );
}

export default CardViewer;
