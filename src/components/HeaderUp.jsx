import styles from "../styles/HeaderUp.module.css";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import Button from "./Button";

const HeaderUp = () => {
  return (
    <div className={styles.upHeaderContainer}>
      <HeaderLogo />
      <HeaderNav />
      <Button />
    </div>
  );
};

export default HeaderUp;
