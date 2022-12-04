import { Link, withRouter } from "react-router-dom";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { createTheme, styled } from "@mui/material/styles";

const Card = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  alignItems: "center",
  color: theme.palette.text.secondary,
  height: 200,
  lineHeight: "60px",
  padding: 20,
}));

function HomePage() {
  const levels = ["Mengzi", "Kongzi"];
  const decks = levels.map((deckId) => {
    return (
      <Grid item xs={6} md={4}>
        <Card elevation={3}>
          <Link to={`/viewer/${deckId}`}>{deckId}</Link>
        </Card>
      </Grid>
    );
  });
  return (
    <Container maxWidth="md" margin="30px">
      <Typography variant="h3" gutterBottom>
        Homepage
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Welcome!
      </Typography>
      <Typography variant="h4" gutterBottom>
        Flashcards
      </Typography>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="stretch"
        spacing={5}
      >
        {decks}
      </Grid>
    </Container>
  );
}

export default HomePage;
