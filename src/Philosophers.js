import Gourds from "./images/gallery/gourds.jpg";
import Mountains from "./images/gallery/mountains.jpg";
import Sprouts from "./images/gallery/sprouts.jpg";
import Fog from "./images/gallery/fog.jpg";
import House from "./images/gallery/house.jpg";
import Final from "./images/gallery/final.jpg";

import Mozi from "./images/philosophers/mozi.jpg";
import Kongzi from "./images/philosophers/kongzi.jpg";
import Mengzi from "./images/philosophers/mengzi.jpg";
import Zhuangzi from "./images/philosophers/zhuangzi.jpg";
import Dongzhongshu from "./images/philosophers/dongzhongshu.jpg";

const Philosophers = {
  Mozi: {
    image: Mozi,
    bio: "Mozi was a Chinese philosopher who founded the School of Mohism. He was strongly against Confucianism, believing it focused too much on extravagant rituals. His philosophy focused on universal love and treating everyone with respect and kindness. He also emphasized the idea of utilitarianism, and explored ideas through a cost benefit analysis. The main focus of Mohism was to bring good to the society while removing harm.",
    background: Fog,
  },
  Kongzi: {
    image: Kongzi,
    bio: "Kongzi is known as the father of Confucianism. He is most well-known for the <i>Analects</i>. His teachings focused on morality, etiquette, and rituals. He strongly believes in filial piety and the importance of following rituals as a means to consistent learning and self-cultivation. Confucianism remains one of the most prominent schools of thought in ancient China, and Kongzi's beliefs are still evident today.",
    background: Gourds,
  },
  Mengzi: {
    image: Mengzi,
    bio: 'Mengzi was a Confucian philosopher who built on the works of Kongzi. He is often referred to as the "Second Sage" of Confucianism. He is most well-known for his claim that human nature is good. He places importance in education and self-discipline as a means to cultivating goodness in people. He uses the sprout as a metaphor for human nature, and encourages individuals to consistently nourish their heart and mind. ',
    background: Sprouts,
  },
  Zhuangzi: {
    image: Zhuangzi,
    bio: "Zhuangzi was a Daoist philosopher who expanded on the teachings of Laozi. His most famous teaching is the concept of the Myriad of Things and the ongoing transformation of Dao. Zhuangzi's pieces encourage flexibility and an open mind. Reading his texts is like performing a ritual: in the process, one practices spontaneity and learns to embrace the never-ending connections in the world.",
    background: Mountains,
  },
  Dongzhongshu: {
    image: Dongzhongshu,
    bio: "Dong Zhongshu was a Confucian scholar who  emphasized the importance of Kongzi's the <i>Spring and Autumn Annals</i>. He reinterpreted Confucianism by synthesizing ideas from other schools of thought like Daoism and Legalism. Additionally, Dong Zhongshu advocated for a rejection of the Qin empire and an adoption of Confucianism. The memorials he wrote to Emperor Wu successfully convinced the emperor to support education and classical learning. As a result, Emperor Wu hired ministers with classical learning.",
    background: House,
  },
  Summary: {
    image: Final,
    bio: "The final deck serves to synthesize both the previous levels and the course overall. We encourage you to consider whether engaging in the Confucian ritual of changing perspectives was helpful in shifting your beliefs.",
    background: Final,
  },
};

export default Philosophers;
