import styles from "../styles/Header.module.css";
import HeaderBottom from "./HeaderBottom";
import HeaderUp from "./HeaderUp";

const Header = () => {
  return (
    <header className={styles.headerSection}>
      <HeaderUp />
      <HeaderBottom />
    </header>
  );
};

export default Header;
