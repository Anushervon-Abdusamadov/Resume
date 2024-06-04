import styles from "./AdBlock.module.scss";

export default function AdBlockS({ imag, text }) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <img src={imag} alt="__" className={styles.icon} />
        <h2 className={styles.text}>{text}</h2>
      </div>
    </div>
  );
}
