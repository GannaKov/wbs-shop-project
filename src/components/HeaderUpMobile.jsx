import { useState } from "react";
import styles from "../styles/HeaderUpMobile.module.css";
import HeaderLogo from "./HeaderLogo";
import { RxHamburgerMenu } from "react-icons/rx";

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
          <RxHamburgerMenu className={styles.navIcon__open} size={30} />
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
