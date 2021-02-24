import Head from "next/head";
import CompleteChallenges from "../components/CompleteChanllenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section className={styles.leftContainer}>
        <div>
          <Profile />
          <CompleteChallenges />
          <Countdown />
        </div>
        <div></div>
      </section>
    </div>
  );
}
