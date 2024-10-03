import styles from "./Header.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Gėlės Druskininkuose</h1>
      </div>
      <div>
        <a href="https://www.facebook.com/profile.php?id=100087776224939">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
      </div>
    </div>
  );
}
