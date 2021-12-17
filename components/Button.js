import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Button.module.css';

export default function Button({title}) {
  return(
    <button
      type="submit"
      className={`${styles.size} ${styles.boxShadow} ${styles.backgroundOrange} ${styles.title} ${utilStyles.borderCircle}`}
    >
      {title}
    </button>
  )
}