import React from 'react'
import styles from './portfolio.module.css'
import Link from 'next/link'
const LayoutPortfolio = ({ children }) => {
  return (
    <div className={styles.layoutBlock}>
      <Link href="/portfolio">
        <h1 className={styles.mainTitle}>My works</h1>
      </Link>

      {children}
    </div>
  )
}

export default LayoutPortfolio
