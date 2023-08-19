'use client'

import React, { useContext } from 'react'
import styles from './ModeToggle.module.css'
import { ThemeContext } from '@/context/ThemeContext'
const ModeToggle = () => {
  const { toggle, mode } = useContext(ThemeContext)

  return (
    <div onClick={toggle} className={styles.container}>
      <div className={styles.icon}>🌙</div>
      <div className={styles.icon}>🌞</div>
      <div
        className={styles.ball}
        style={mode === 'light' ? { left: '2px' } : { right: '2px' }}
      />
    </div>
  )
}

export default ModeToggle
