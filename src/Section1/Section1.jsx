import styles from "./Section1.module.css";

export default function Section1() {
  return (
    <div className={styles.container}>
      <div>
        <button onClick={() => navigator.clipboard.writeText("+3708251048")}>
          +37068251048
        </button>
      </div>
    </div>
  );
}
