import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div> ©2023 Tom Hestamp. All right reversed</div>
      <div className={styles.social}>
        <Link target="_blank" href="https://instagram.com/tomhestamp">
          <Image
            className={styles.icon}
            width={30}
            height={30}
            src="/3.png"
            alt="Tom Hestamp Instagram"
          />
        </Link>
      </div>
    </div>
  )
}

export default Footer
