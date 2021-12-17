import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Navigation.module.css';
import utilStyles from '../styles/utils.module.css';


export default function Navigation({borderedList, textLight}) {
  const [mobileView, setMobileView] = useState(false);

  useEffect(() => {
    setMobileView(window.innerWidth <= 425 ? true : false)
  }, [])

  const display = mobileView ? styles.displayMobile : styles.display;
  const mobileListStyle = borderedList ? styles.borderedList : "";
  const textLightStyle = textLight ? utilStyles.textLight : "";

  return(
    <nav className={`${styles.size} ${display} ${utilStyles.textNavigation} ${utilStyles.textUppercase}`}>
      <Link href="/">
        <a className={`${styles.link} ${mobileListStyle} ${textLightStyle}`}>Discover Oqulo</a>
      </Link>
      <Link href="#features">
        <a className={`${styles.link} ${mobileListStyle} ${textLightStyle}`}>Features</a>
      </Link>
      <Link href="#cta">
        <a className={`${styles.link} ${mobileListStyle} ${textLightStyle}`}>Contact</a>
      </Link>
    </nav>
  )
}
