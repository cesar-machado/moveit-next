import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "../styles/components/Profile.module.css";

function Profile() {
  const { toggleTheme, currentTheme } = useContext(ThemeContext);
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/cesar-machado.png" alt="César Machado" />
      <div>
        <strong>César Machado</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level {level}
        </p>
      </div>
      {currentTheme === "theme-dark" ? (
        <MdWbSunny onClick={toggleTheme} className={styles.theme1} />
      ) : (
        <FaMoon
          color="#2E384D"
          onClick={toggleTheme}
          className={styles.theme}
        />
      )}
    </div>
  );
}

export default Profile;
