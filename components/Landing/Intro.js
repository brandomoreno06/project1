import Image from 'next/image';
import styles from '../../styles/Landing/Intro.module.css';
import utilStyles from '../../styles/utils.module.css';
import containerStyles from '../../styles/container.module.css';

export default function Intro() {
  return(
    <div id="intro" className={`${styles.display} ${containerStyles.container}`}>
      <div className={`${styles.display2} ${styles.content}`}>
        <h1 className={`${styles.heading} ${utilStyles.textDark} ${utilStyles.textHeadingFont}`}>
          Tried & Tested Space Management Software
        </h1>
        <div className={styles.imageMobile}>
          <Image
            src="/images/intro_image.png"
            width={526}
            height={451}
          />
        </div>
        <div className={`${utilStyles.textDark2} ${styles.subHeading}`}>
          Oqulo is a homegrown app that’s been tested by real-life businesses. Whether you operate on a single building or in multiple locations, Oqulo is designed to make your space leasing operations hassle-free.
          <br />
          <br />
          Your clients will have a smooth booking & online payment experience, and your concierge staff will be able to view occupancy stats and generate reports at a click of a button.
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src="/images/intro_image.png"
          width={526}
          height={451}
        />
      </div>
    </div>
  )
}