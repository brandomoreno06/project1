import styles from '../styles/Input.module.css';
import utilStyles from '../styles/utils.module.css';

export default function Input() {
  return(
    <input
      className={`${styles.size} ${styles.boxShadow} ${styles.font} ${styles.paddingLeft} ${utilStyles.borderCircle}`}
      type="email"
      placeholder="Email address"
    ></input>
  )
}