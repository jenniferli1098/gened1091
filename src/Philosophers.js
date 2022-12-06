import Gourds from "./images/gourds.jpg";
import Mountains from "./images/mountains.jpg";
import Sprouts from "./images/sprouts.jpg";
import Fog from "./images/fog.jpg";
import House from "./images/house.jpg";
import Final from "./images/final.jpg";

import Mozi from "./images/philosophers/mozi.jpg";
import Kongzi from "./images/philosophers/kongzi.jpg";
import Mengzi from "./images/philosophers/mengzi.jpg";
import Zhuangzi from "./images/philosophers/zhuangzi.jpg";
import Dongzhongshu from "./images/philosophers/dongzhongshu.jpg";

const Philosophers = {
  Mozi: {
    image: Mozi,
    bio: "Mozi was a Chinese Philosopher who founded the School of Mohism. He was strongly against Confucianism, believing it focused too much on extravagant rituals. His philosopher focused on universal love and treating everyone with respect and kindness. He also emphasized the idea of utilitarianism, and explored ideas through a cost benefit analysis. The main focus of Mohism was to bring good to the society while removing harm.",
    background: Fog,
  },
  Kongzi: {
    image: Kongzi,
    bio: "Kongzi is known as the father of Confucianism. He is most well-known piece through the Confucian piece, the Analects. His teachings focused on morality, etiquette, and rituals. He strongly believes in filial piety and the imprtance of following rituals as a means to consistent learning and self-cultivation. Confucianism remains one of the most well known school of thought in ancient China. It's beliefs still evident in today's modern society.",
    background: Gourds,
  },
  Mengzi: {
    image: Mengzi,
    bio: 'Mengzi was a Confucian philospher who built on the works of Kongzi. He is often referred to as the "Second Sage" of Confucianism. He is most well-known for his claim that human nature is good. He places importance in education and self-discipline as means to cultivating goodness in people. He uses the sprout as a metaphor for human nature, and encourages individuals to consistently nourish one\'s heart and mind. ',
    background: Sprouts,
  },
  Zhuangzi: {
    image: Zhuangzi,
    bio: "Zhuangzi was a Daoist philosopher who expanded on the teachings of Laozi. His most famous teaching is the concept of the Myriad of Things and the ongoing transformation of Dao. Zhuangzi's pieces encourage flexibility and an open mind. Rading his texts is like performing a ritual;in the process, one practices spontenaity and learns to embrace the neverending connections in the world.",
    background: Mountains,
  },
  Dongzhongshu: {
    image: Dongzhongshu,
    bio: "something",
    background: House,
  },
  Summary: {
    image: Final,
    bio: "The final deck serves to synthesize both the previous levels and the course overall. We encourage you to consider whether engaging in the Confucian ritual of changing perspectives was helpful in shifting your beliefs.",
    background: Final,
  },
};

export default Philosophers;
