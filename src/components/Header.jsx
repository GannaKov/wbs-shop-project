import styles from "../styles/Header.module.css";
import logo from "../assets/images/imagesAnna/Logo.webp";

const Header = () => {
  return (
    <header className={styles.headerSection}>
      <div className={styles.upHeaderContainer}>
        <div className={styles.logoHeaderUpContainer}>
          <img className={styles.imgLogoHeaderUpContainer} src={logo} alt="" />
        </div>
        <nav>
          <ul className={styles.listHeaderUpContainer}>
            <li className={styles.itemHeaderUpContainer}>
              <a className={styles.linkNavHeaderUpContainer} href="#">
                HOME
              </a>
            </li>
            <li className={styles.itemHeaderUpContainer}>
              <a className={styles.linkNavHeaderUpContainer} href="#">
                ABOUT
              </a>
            </li>
            <li className={styles.itemHeaderUpContainer}>
              <a className={styles.linkNavHeaderUpContainer} href="#">
                SERVICES
              </a>
            </li>
            <li className={styles.itemHeaderUpContainer}>
              <a className={styles.linkNavHeaderUpContainer} href="#">
                PRODUCTS
              </a>
            </li>
            <li className={styles.itemHeaderUpContainer}>
              <a className={styles.linkNavHeaderUpContainer} href="#">
                CONTACT
              </a>
            </li>
          </ul>
        </nav>
        <button className={styles.btnHeaderUpContainer}>book now</button>
      </div>
      <div className={styles.bottomHeaderContainer}>bottom</div>
    </header>
  );
};

export default Header;
