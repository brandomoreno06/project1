import styles from '../../styles/Landing/CallToAction.module.css';
import utilStyles from '../../styles/utils.module.css';
import Button from '../Button.js';
import Input from '../Input.js';


export default function CallToAction() {

  return(
    <div id="cta" className={`${styles.size} ${styles.display} ${styles.background}`}>
      <h1 className={`${styles.heading} ${utilStyles.textHeadingFont} ${utilStyles.textLight}`}>
        Launching Soon
      </h1>
      <h5 className={`${styles.subHeading} ${utilStyles.textLight} ${utilStyles.textAlignCenter}`}>
        Sign up to get updates on Oqulo’s public release.
      </h5>
      <div className={styles.cta}>
        <Input />
        <Button title="TRY THE BETA" />
      </div>
    </div>
  )
}