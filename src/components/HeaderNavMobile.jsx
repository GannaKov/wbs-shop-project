import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import styles from "../styles/HeaderNavMobile.module.css";
import HeaderLogo from "./HeaderLogo";

const HeaderUpMobile = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleOnOpenBtnClick = () => {
    setIsHidden((prev) => (prev ? false : true));
    if (document.body) {
      document.body.classList.toggle("no-scroll");
    }
  };
  return (
    <>
      <div className={styles.mobileUpHeaderContainer}>
        <HeaderLogo />
        <button className={styles.navBtn__open} onClick={handleOnOpenBtnClick}>
          <GiHamburgerMenu className={styles.navIcon__open} size={30} />
        </button>
      </div>
      <div
        className={`${styles.mobileMenuSection} ${
          isHidden ? styles.isHidden : ""
        }`}
      >
        I am Mobile
      </div>
    </>
  );
};

export default HeaderUpMobile;
