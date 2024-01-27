import styles from "../styles/HeaderLogo.module.css";
import logo from "../assets/images/imagesAnna/Logo.webp";

const HeaderLogo = () => {
  return (
    <div className={styles.logoHeaderUpContainer}>
      <img className={styles.imgLogoHeaderUpContainer} src={logo} alt="" />
    </div>
  );
};
export default HeaderLogo;
