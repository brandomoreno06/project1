import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from '../../styles/Landing/Stats.module.css';
import utilStyles from '../../styles/utils.module.css';
import statisticsImageDesktop from '/public/images/statistics.png';
import statisticsImageMobile from '/public/images/statistics_mobile.png';

export default function Stats() {
  const [imageSrc, setImageSrc] = useState(statisticsImageDesktop);

  useEffect(() => {
    setImageSrc(window.innerWidth > 450 ? statisticsImageDesktop : statisticsImageMobile);
  })

  return(
    <div className={`${styles.size} ${styles.display}`}>
      <div>
        <h1 className={`${styles.heading} ${utilStyles.textHeadingFont} ${utilStyles.textDark} ${utilStyles.textAlignCenter}`}>
          Stats Delivered Beautifully
        </h1>
        <h5 className={`${styles.subHeading} ${utilStyles.textAlignCenter} ${utilStyles.textDark2}`}>
          View sales charts, booking ratio and user behavior using Oqulo’s visual reporting feature.
        </h5>
      </div>
      <div className={styles.imageContainer}>
        <Image
          src={imageSrc}
          layout="fill"
          objectFit='contain'
          quality={100}
        />
      </div>
    </div>
  )
}