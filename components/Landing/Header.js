import Image from 'next/image';
import styles from '../../styles/Landing/Header.module.css';
import containerStyles from '../../styles/container.module.css';
import utilStyles from '../../styles/utils.module.css'
import Navigation from '../Navigation';
import { useEffect, useState } from 'react';


export default function Header() {
  const [menuIcon, setMenuIcon] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  useEffect(() => {
    window.onresize = () => {
      if (window.innerWidth <= 425) {
        setMenuIcon(true);
      } else {
        setMenuIcon(false);
      }
    }
  })

  const toggleDropdownMenu = () => {
    setIsMenuActive(!isMenuActive)
  };

  const dropDownClass = isMenuActive ? styles.dropDownMenuActive : styles.dropDownMenuInactive

  return(
    <header className={`${containerStyles.container} ${styles.display} ${styles.position} ${utilStyles.textLight}`}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/logo.png"
          layout="fill"
          objectFit="contain"
        />
      </div>
      { menuIcon ?
        <div onClick={toggleDropdownMenu}>
          <Image
            src="/images/menu_hamburger.png"
            width={22}
            height={18}
          />
          <div className={`${styles.dropDownMenu} ${dropDownClass}`}>
            <Navigation borderedList textLight />
          </div>
        </div> :
        <div className={styles.navigationDesktop}>
          <Navigation />
        </div>
      }
    </header>
  )
}
