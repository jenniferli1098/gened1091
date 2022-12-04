import React from "react";
import Cards from "./Cards";
import Philosophers from "./Philosophers";
import "./CardViewer.css";

import { Link, useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import InfoIcon from "@mui/icons-material/Info";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { createTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="md" margin="30px">
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item md={10}></Grid>
        <Grid item container xs={12} alignItems="center">
          <Grid item md={10}>
            <Typography variant="h3" gutterBottom>
              {deckId}
            </Typography>
          </Grid>
          <Grid item container justifyContent="flex-end" md={2}>
            <Grid item>
              <IconButton aria-label="delete" onClick={handleOpen}>
                <InfoIcon fontSize="inherit" />
              </IconButton>
            </Grid>
          </Grid>

          <Typography variant="subtitle1" gutterBottom>
            Card {currentIndex + 1} out of {cards.length}
          </Typography>
        </Grid>
        <Grid item container xs={2} justifyContent="flex-end">
          <Grid item>
            <IconButton
              aria-label="delete"
              size="large"
              disabled={currentIndex === 0}
              onClick={prevCard}
            >
              <ArrowBackIosIcon fontSize="inherit" />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item xs={8} md={6}>
          <Card elevation={3}>{cards[currentIndex]}</Card>
        </Grid>
        <Grid item container xs={2} justifyContent="flex-start">
          <Grid item>
            <IconButton
              aria-label="delete"
              size="large"
              disabled={currentIndex === cards.length - 1}
              onClick={nextCard}
            >
              <ArrowForwardIosIcon fontSize="inherit" />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <img src={Philosophers[deckId].image} height={200} />
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {deckId}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </Container>
  );
}

export default CardViewer;
