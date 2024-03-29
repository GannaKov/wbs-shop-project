import { useState } from "react";
import styles from "../styles/HeaderUp.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import HeaderNavMobile from "./HeaderNavMobile";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import Button from "./Button";

const HeaderUp = () => {
  const [isHidden, setIsHidden] = useState(true);

  const handleOnOpenBtnClick = () => {
    // setIsHidden((prev) => (prev ? false : true));
    setIsHidden((prev) => !prev);
    if (document.body) {
      document.body.classList.toggle("no-scroll");
    }
  };
  return (
    <>
      <div className={styles.upHeaderContainer}>
        <HeaderLogo />
        <nav className={styles.desktopNav}>
          <HeaderNav />
        </nav>
        <HeaderNavMobile
          isHidden={isHidden}
          handleOnOpenBtnClick={handleOnOpenBtnClick}
        />
        <div className={styles.headerBtnWrp}>
          <Button />
        </div>
        <button className={styles.navBtn__open} onClick={handleOnOpenBtnClick}>
          <GiHamburgerMenu className={styles.navIcon__open} size={30} />
        </button>
      </div>
    </>
  );
};

export default HeaderUp;
