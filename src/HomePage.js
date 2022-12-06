import { Link, withRouter } from "react-router-dom";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { createTheme, styled } from "@mui/material/styles";
import "./assets/css/main.css";
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
    // <Container maxWidth="md" margin="30px">
    //   <Typography variant="h3" gutterBottom>
    //     Homepage
    //   </Typography>
    //   <Typography variant="subtitle1" gutterBottom>
    //     Welcome!
    //   </Typography>
    //   <Typography variant="h4" gutterBottom>
    //     Flashcards
    //   </Typography>
    //   <Grid
    //     container
    //     direction="row"
    //     justifyContent="center"
    //     alignItems="stretch"
    //     spacing={5}
    //   >
    //     {decks}
    //   </Grid>
    // </Container>

    <div id="wrapper" class="divided">
      <section class="banner style1 orient-left content-align-left image-position-right fullscreen onload-image-fade-in onload-content-fade-right">
        <div class="content">
          <h1>Story</h1>
          <p class="major">
            A (modular, highly tweakable) responsive one-page template designed
            by <a href="https://html5up.net">HTML5 UP</a> and released for free
            under the <a href="https://html5up.net/license">Creative Commons</a>
            .
          </p>
          <ul class="actions stacked">
            <li>
              <a href="#first" class="button big wide smooth-scroll-middle">
                Get Started
              </a>
            </li>
          </ul>
        </div>
        <div class="image">
          <img src="images/banner.jpg" alt="" />
        </div>
      </section>

      <section
        class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in"
        id="first"
      >
        <div class="content">
          <h2>Magna etiam feugiat</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
            ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis
            laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus,
            pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum
            dolor sit amet.
          </p>
          <ul class="actions stacked">
            <li>
              <a href="#" class="button">
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <div class="image">
          <img src="images/spotlight01.jpg" alt="" />
        </div>
      </section>

      <section class="spotlight style1 orient-left content-align-left image-position-center onscroll-image-fade-in">
        <div class="content">
          <h2>Tempus adipiscing</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
            ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis
            laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus,
            pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum
            dolor sit amet.
          </p>
          <ul class="actions stacked">
            <li>
              <a href="#" class="button">
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <div class="image">
          <img src="images/spotlight02.jpg" alt="" />
        </div>
      </section>

      <section class="spotlight style1 orient-right content-align-left image-position-center onscroll-image-fade-in">
        <div class="content">
          <h2>Pharetra etiam nulla</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
            ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis
            laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus,
            pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum
            dolor sit amet.
          </p>
          <ul class="actions stacked">
            <li>
              <a href="#" class="button">
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <div class="image">
          <img src="images/spotlight03.jpg" alt="" />
        </div>
      </section>

      <footer class="wrapper style1 align-center">
        <div class="inner">
          <ul class="icons">
            <li>
              <a href="#" class="icon brands style2 fa-twitter">
                <span class="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon brands style2 fa-facebook-f">
                <span class="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon brands style2 fa-instagram">
                <span class="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon brands style2 fa-linkedin-in">
                <span class="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="#" class="icon style2 fa-envelope">
                <span class="label">Email</span>
              </a>
            </li>
          </ul>
          <p>
            &copy; Untitled. Design: <a href="https://html5up.net">Gened1091</a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
