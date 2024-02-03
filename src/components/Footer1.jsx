import styles from "../styles/Footer.module.css";
import logoFooter from "../assets/images/imagesRuben/Stacked.webp";
import facebook from "../assets/images/imagesRuben/facebook.webp";
import instagram from "../assets/images/imagesRuben/instagram.webp";
const Footer1 = () => {
    return (
        <div className={styles.footerContainer}>
            <div>
                <img src={logoFooter} alt="" />
            </div>
            <div className={styles.openingH}>
                <div>Opening Hours (by appointment only)</div>
                <div className={styles.daysW}>
                    <div>
                        <div id="day">Mon</div>
                        <div id="day">Tue</div>
                        <div id="day">Wed</div>
                        <div id="day">Thurs</div>
                        <div id="day">Fri</div>
                        <div id="day">Sat</div>
                        <div id="day">Sun</div>
                    </div>
                    <div className={styles.timesW}>
                        <div id="time">9am-3pm</div>
                        <div id="time">9am-3pm</div>
                        <div id="time">9am-3pm</div>
                        <div id="time">9am-7pm</div>
                        <div id="time">9am-7pm</div>
                        <div id="time">9am-3pm</div>
                        <div id="time">closed</div>
                    </div>
                </div>
            </div>
            <div className={styles.contact}>
                <div className={styles.tlf}><a href="https://www.google.com/search?q=mane+ethical+hair&oq=mane+eth&aqs=chrome.0.69i59l2j69i57j0i22i30j0i10i22i30j0i22i30j0i10i22i30j69i60.5805j0j7&sourceid=chrome&ie=UTF-8" target="_blank" rel="noreferrer">(07) 5659 1905</a></div>
                <div>6 / 5-7 Tallebudgera Creek Road, Burleigh, Queensland</div>
                <div className={styles.socialMedia}>
                    <a href="https://www.facebook.com/maneethicalhairdressing" target="_blank" rel="noreferrer"><img src={facebook} alt="facebookLogo" /></a>
                    <a href="https://www.instagram.com/maneethicalhair/" target="_blank" rel="noreferrer"><img src={instagram} alt="instagramLogo" /></a>
                </div>
            </div>
        </div>);
  };
  export default Footer1;