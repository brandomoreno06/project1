import Banner from "./Banner";
import styles from "../../styles/Landing/Content.module.css";
import Intro from "./Intro";
import Features from "./Features";
import Stats from "./Stats";
import CallToAction from "./CallToAction";

export default function Content() {
  return(
    <div className={styles.content}>
      <Banner />
      <Intro />
      <Features />
      <Stats />
      <CallToAction />
    </div>
  )
};