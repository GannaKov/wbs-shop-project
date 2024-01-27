import styles from "../styles/HeaderBottom.module.css";
import header1 from "../assets/images/imagesAnna/header1.webp";
import header2 from "../assets/images/imagesAnna/header2.webp";
import header3 from "../assets/images/imagesAnna/header3.webp";

export const HeaderBottom = () => {
  return (
    <div className={styles.bottomHeaderContainer}>
      <img className={styles.imgBottomHeaderContainer} src={header1} alt="" />
      <img className={styles.imgBottomHeaderContainer} src={header2} alt="" />
      <img className={styles.imgBottomHeaderContainer} src={header3} alt="" />
    </div>
  );
};

export default HeaderBottom;
