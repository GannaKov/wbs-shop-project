/* eslint-disable react/prop-types */
import styles from "../styles/HeaderNavMobile.module.css";
import { IoClose } from "react-icons/io5";
import HeaderNav from "./HeaderNav";
import Button from "./Button";

const HeaderUpMobile = ({ isHidden, handleOnOpenBtnClick }) => {
  return (
    <div
      className={`${styles.mobileMenuSection} ${
        isHidden ? styles.isHidden : ""
      }`}
    >
      <button
        className={styles.navBtn__close}
        onClick={handleOnOpenBtnClick}
        type="button"
        aria-label="Close"
      >
        <IoClose size={25} />
      </button>
      <nav>
        <HeaderNav />
      </nav>

      <Button />
    </div>
  );
};

export default HeaderUpMobile;
