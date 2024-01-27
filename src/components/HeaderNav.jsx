import styles from "../styles/HeaderNav.module.css";

const HeaderNav = () => {
  return (
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
  );
};

export default HeaderNav;
