import styles from "../styles/Hero.module.css";
import hero from "../assets/images/imagesRuben/hero.webp";
const Hero = () => {
  return (
  <div className={styles.heroContainer}>
    <img className={styles.heroImg} src={hero} alt="Saloon" />
    </div>);
  
};

export default Hero;
