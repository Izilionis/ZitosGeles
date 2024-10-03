import styles from "./Fotter.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";

export default function Fotter() {
  return (
    <div className={styles.container}>
      <h3>
        Tel. Nr. <span>+37068251048</span>
      </h3>
      <h3>Druskininkai M.K.Čiurlionio g. 178</h3>
      <a href="https://www.facebook.com/profile.php?id=100087776224939">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </div>
  );
}
