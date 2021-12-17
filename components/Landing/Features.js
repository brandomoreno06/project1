import styles from '../../styles/Landing/Features.module.css';
import containerStyles from '../../styles/container.module.css';
import utilStyles from '../../styles/utils.module.css';
import FeatureItem from './FeatureItem';
import Image from 'next/image';

export default function Features() {
  return(
    <>
      <div id="features" className={`${styles.size} ${styles.background}`}>
        <div className={`${containerStyles.container} ${styles.display}`}>
          <h1 className={`${utilStyles.textHeadingFont} ${utilStyles.textDark} ${utilStyles.textAlignCenter} ${styles.heading}`}>
            Oqulo Features at a Glance
          </h1>
          <div className={`${utilStyles.textDark2} ${styles.subHeading} ${utilStyles.textAlignCenter}`}>
            Powerful functionalities that changes the way you do business.
          </div>
        
          <div className={`${styles.display2}`}>
            <div className={styles.displayLeft}>
              <FeatureItem
                title="Powerful Space Management"
                content="Manage meeting room and desk bookings, create events, sell tickets, schedule private office showings, automate invoicing and connect with members --- all in one central dashboard."
                imageSrc="/images/finger-touching-tablet-screen.png"
                left
              />
              <FeatureItem
                title="Painless Integration"
                content="No matter what your website is built on, Oqulo is easy to setup and integrate with CRM and payment gateways. Go live in a matter of days."
                imageSrc="/images/hand-graving-smartphone.png"
                left
              />
            </div>
            <div className={styles.displayRight}>
              <FeatureItem
                title="User-Friendly Interface"
                content="Clients will find it easy to book and pay for their space, thanks to Oqulo’s easy navigation and pixel-perfect design. Keep members up to date with Oqulo’s community board and help desk features.
                "
                imageSrc="/images/mobile-application.png"
              />
              <FeatureItem
                title="Secure Data & White Label Branding"
                content="Get peace of mind in knowing that client information and sales data are stored in a secure server. Our white label service allows you to market this platform as your own."
                imageSrc="/images/smartphone-blocked.png"
              />
            </div>
          </div>
        </div>
        <div className={`${styles.imageContainer} ${styles.imageShadow}`}>
          <Image
            src="/images/screen.png"
            layout="fill"
            objectFit='contain'
            quality={100}
          />
        </div>
      </div>
    </>
  )
}