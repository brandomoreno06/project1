import styles from '../../styles/Landing/FeatureItem.module.css';
import utilStyles from '../../styles/utils.module.css';
import Image from 'next/image';

export default function FeatureItem({title, content, imageSrc, left}) {
  const classes = left ? styles.displayFlexReverse : styles.displayFlex

  return(
    <div className={`${styles.size} ${classes}`}>
      <div className={styles.imageContainer}>
        <div className={styles.imageSize}>
          <Image
            src={imageSrc}
            layout="fill"
            objectFit="contain"
          ></Image>
        </div>
      </div>
      <div className={`${styles.displayFlexColumn} ${styles.contentSize}`}>
        <h2 className={`${styles.heading} ${utilStyles.textDark}`}>
          {title}
        </h2>
        <div className={`${styles.subHeading} ${utilStyles.textDark2}`}>
          {content}
        </div>
      </div>
    </div>
  )
}