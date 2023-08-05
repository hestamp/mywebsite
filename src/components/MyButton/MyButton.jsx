import React from 'react'
import styles from './MyButton.module.css'
import Link from 'next/link'
const MyButton = ({ text, url }) => {
  return (
    <Link href={url || '#'}>
      <button className={styles.button}> {text}</button>
    </Link>
  )
}

export default MyButton
