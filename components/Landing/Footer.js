import styles from '../../styles/Landing/Footer.module.css';
import Image from 'next/image';
import Navigation from '../Navigation';
import utilStyles from '../../styles/utils.module.css';


export default function Footer() {
  return(
    <div className={`${styles.size} ${styles.display} ${styles.background}`}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/logo_dark.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <Navigation />
      <span className={`${styles.copyright} ${utilStyles.textDark2}`}>
        Copyright © Oqulo 2018. All rights reserved.
      </span>
    </div>
  )
}