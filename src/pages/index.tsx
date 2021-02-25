import Head from "next/head";
import ChallengeBox from "../components/ChallengeBox";
import CompleteChallenges from "../components/CompleteChallenges";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import { CountdownProvider } from "../contexts/CountdownContext";

import styles from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início || move.it</title>
      </Head>
      <ExperienceBar />

      <CountdownProvider>
        <section className={styles.leftContainer}>
          <div>
            <Profile />
            <CompleteChallenges />
            <Countdown />
          </div>
          <div className={styles.RightContainer}>
            <ChallengeBox />
          </div>
        </section>
      </CountdownProvider>
    </div>
  );
}
