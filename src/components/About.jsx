import styles from "../styles/About.module.css";

const About = () => {
  return (
  <div className={styles.aboutContainer}>
    <h2>We have the freedom to choose, so we chose to be good.</h2>
    <p>At Mane Ethical Hairdressing we have exercised our power to choose, and in doing so we have created a space and a community of shared values. Being sustainable and ethical isn't always the easiest of paths, however we made a conscious effort to explore and research salon options that positively contribute to making a better world.<br />
We hope you enjoy what we have created.</p>
    <a href="https://apps.kitomba.com/bookings/maneethical" target="_blank" rel="noreferrer"><div className={styles.appBtn}>book appointment now</div></a>
  </div>);
};

export default About;