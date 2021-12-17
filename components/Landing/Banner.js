import Image from 'next/image';
import styles from '../../styles/Landing/Banner.module.css';
import containerStyles from '../../styles/container.module.css';
import utilStyles from '../../styles/utils.module.css';
import Button from '../Button';
import Input from '../Input';

export default function Banner() {

  return(
    <div id="banner" className={`${styles.background} ${styles.size} ${styles.bannerDisplay} ${utilStyles.textLight}`}>
      <div className={`${containerStyles.container} ${styles.contentDisplay}`}>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/images/iPhone7.png"
            width={355}
            height={470}
            quality={100}
          />
        </div>
        <div id="tagline" className={styles.tagline}>
          <h1 className={`${utilStyles.textHeadingFont} ${styles.heading}`}>
            The Only Platform You’ll Need to Run Smart Coworking Spaces & Serviced Offices
          </h1>
          <h3 className={styles.subHeading}>
            Oqulo is built to sell, manage and grow your commercial real estate business.
            Collect payments, manage clients and run reports using our booking app.
            Engage members using our community messaging feature.
            <br/>
            <br/>
            Be the first in line to take Oqulo for a test drive!
          </h3>
          <div className={styles.cta}>
            <Input />
            <Button title="NOTIFY ME"/>
            <span className={styles.ctaNote}>*No spam, that's a promise.</span>
          </div>
        </div>
      </div>
    </div>
  )
}