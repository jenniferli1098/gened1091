import "./assets/css/main.css";
import Gourds from "./images/gallery/gourds.jpg";
import Mountains from "./images/gallery/mountains.jpg";
import Sprouts from "./images/gallery/sprouts.jpg";
import Fog from "./images/gallery/fog.jpg";
import House from "./images/gallery/house.jpg";
import Final from "./images/gallery/final.jpg";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div id="wrapper" class="divided">
      <section class="banner  orient-right  style1 content-align-left">
        <div class="content">
          <p>
            Ultimately, in reimagining We’re Not Really Strangers as a digital
            card game with prompts inspired by ancient Chinese philosophers, we
            urge individuals to reflect on universal human topics:
          </p>

          <ul>
            <li>Human nature</li>
            <li>Morality</li>
            <li>Interpersonal relationships</li>
            <li>External and internal motivations</li>
            <li>Structure of society</li>
          </ul>
          <p>
            In the process of answering these questions, players strengthen both
            their relationships with others and with themselves. The open-ended
            nature of the questions stimulates intellectual discourse that
            encourages individuals to reflect on their ruts and patterns, their
            values, and their perspectives on humanity. Our adaptation thus
            serves as an accessible form of self-cultivation and education
            inspired by Chinese philosophers.
          </p>
        </div>
        <div class="content">
          <h1>Gened 1091 Project</h1>
          <p class="major">Welcome to our Gened 1091 Project</p>
          <p>
            In our readaptation of the We’re Not Really Strangers card game, we
            introduce card decks that brings the philosophical themes of Mozi,
            Kongzi, Mengzi, Zhuangzi, and Dong Zhongshu to life. This game is
            designed for two or more players who access the card game online and
            answer thought-provoking questions inspired by key Chinese
            philosophers. We hope that players better understand themselves and
            their partners as they respond to our prompts.
          </p>
          <p>
            The game is divided into multiple levels that encourage users to
            engage with different perspectives. Each level in our adaptation
            spotlights one philosopher.
          </p>
          <p>
            Many prompts include textual citations to our prompts; we encourage
            players to explore the relevant passages, expand their
            understanding, and pursue their intellectual interest in a
            particular philosopher and/or concept.
          </p>
          <p>
            Our final level attempts to both synthesize the previous levels and
            the course overall.
          </p>
        </div>
      </section>

      <section
        class="spotlight style1 orient-right content-align-left image-position-center"
        id="first"
      >
        <div class="content">
          <h2>Mozi</h2>
          <p>Structure of Society | External Motivation | Human Nature</p>
          <ul class="actions stacked">
            <li>
              <Link to="/viewer/Mozi" class="button">
                Explore Deck
              </Link>
            </li>
          </ul>
        </div>
        <div class="image">
          <img src={Fog} alt="" />
        </div>
      </section>

      <section class="spotlight style1 orient-left content-align-left image-position-center">
        <div class="content">
          <h2>Kongzi</h2>
          <p>Self-Cultivation | Filial Piety | Interpersonal Relationships</p>
          <ul class="actions stacked">
            <li>
              <Link to="/viewer/Kongzi" class="button">
                Explore Deck
              </Link>
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
          <p>Human Nature | Self-Cultivation | Structure of Society</p>
          <ul class="actions stacked">
            <li>
              <Link to="/viewer/Mengzi" class="button">
                Explore Deck
              </Link>
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
          <p>Spontaneity | Human Nature | Interpersonal Relationships</p>
          <ul class="actions stacked">
            <li>
              <Link to="/viewer/Zhuangzi" class="button">
                Explore Deck
              </Link>
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
          <p>Structure of Society</p>
          <ul class="actions stacked">
            <li>
              <Link to="/viewer/Dongzhongshu" class="button">
                Explore Deck
              </Link>
            </li>
          </ul>
        </div>
        <div class="image">
          <img src={House} alt="" />
        </div>
      </section>

      <section class="spotlight style1 orient-left content-align-left image-position-center">
        <div class="content">
          <h2>Summary</h2>
          <p>
            Final deck: After exploring each philosopher and their beliefs,
            reflect on how they are similar or different to your own set of
            beliefs. How will you incorporate these ideas to your everyday life?
          </p>
          <ul class="actions stacked">
            <li>
              <Link to="/viewer/Summary" class="button">
                Explore Deck
              </Link>
            </li>
          </ul>
        </div>
        <div class="image">
          <img src={Final} alt="" />
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
