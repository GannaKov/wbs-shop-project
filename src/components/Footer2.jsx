import styles from "../styles/Footer.module.css";
import sustainable from "../assets/images/imagesRuben/Sustainable.webp";
const Footer2 = () => {
    return (
    <div className={styles.footer2}>
        <div>
            <img src={sustainable} alt="" />
        </div>
        <div className={styles.info}>
            <div>@2021 Mane Ethical Hairdressing</div>
            <div>Branding + website by <a className={styles.lumo} href="http://www.lumodesignstudio.com" target="_blank">Lumo Design Studio</a></div>
        </div>

    </div>);
  };
  export default Footer2;