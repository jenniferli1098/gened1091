import { Link, withRouter } from "react-router-dom";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { createTheme, styled } from "@mui/material/styles";
import "./assets/css/main.css";
import Gourds from "./images/gourds.jpg";
import Mountains from "./images/mountains.jpg";
import Sprouts from "./images/sprouts.jpg";
import Banner from "./images/banner.jpg";
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
          <h1>Gened 1091 Project</h1>
          <p class="major">Wekcome to our Gened 1091 Project</p>

          <p>Cassie and Jennifer</p>
        </div>
        <div class="image">
          <img src={Banner} alt="" />
        </div>
      </section>

      <section
        class="spotlight style1 orient-right content-align-left image-position-center"
        id="first"
      >
        <div class="content">
          <h2>Mozi</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
            ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis
            laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus,
            pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum
            dolor sit amet.
          </p>
          <ul class="actions stacked">
            <li>
              <a href="/viewer/Mozi" class="button">
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <div class="image">
          <img src={Gourds} alt="" />
        </div>
      </section>

      <section class="spotlight style1 orient-left content-align-left image-position-center">
        <div class="content">
          <h2>Kongzi</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
            ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis
            laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus,
            pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum
            dolor sit amet.
          </p>
          <ul class="actions stacked">
            <li>
              <a href="/viewer/Kongzi" class="button">
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <div class="image">
          <img src={Gourds} alt="" />
        </div>
      </section>

      <section class="spotlight style1 orient-right content-align-left image-position-center">
        <div class="content">
          <h2>Mengzi</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
            ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis
            laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus,
            pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum
            dolor sit amet.
          </p>
          <ul class="actions stacked">
            <li>
              <a href="/viewer/Mengzi" class="button">
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <div class="image">
          <img src={Sprouts} alt="" />
        </div>
      </section>

      <section class="spotlight style1 orient-left content-align-left image-position-center">
        <div class="content">
          <h2>Zhuangzi</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
            ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis
            laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus,
            pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum
            dolor sit amet.
          </p>
          <ul class="actions stacked">
            <li>
              <a href="/viewer/Zhuangzi" class="button">
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <div class="image">
          <img src={Mountains} alt="" />
        </div>
      </section>

      <section class="spotlight style1 orient-right content-align-left image-position-center">
        <div class="content">
          <h2>Dong Zhongshu</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id
            ante sed ex pharetra lacinia sit amet vel massa. Donec facilisis
            laoreet nulla eu bibendum. Donec ut ex risus. Fusce lorem lectus,
            pharetra pretium massa et, hendrerit vestibulum odio lorem ipsum
            dolor sit amet.
          </p>
          <ul class="actions stacked">
            <li>
              <a href="/viewer/Dongzhongshu" class="button">
                Learn More
              </a>
            </li>
          </ul>
        </div>
        <div class="image">
          <img src={Sprouts} alt="" />
        </div>
      </section>

      <footer class="wrapper style1 align-center">
        <div class="inner">
          <p>
            &copy; Gened 1091. Design: <a href="https://html5up.net">HTML5UP</a>
            .
          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
