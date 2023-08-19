'use client'
import Link from 'next/link'
import React from 'react'
import styles from './Navbar.module.css'
import ModeToggle from '../ModeToggle/ModeToggle'
import { signOut, useSession } from 'next-auth/react'

const staticMenu = [
  { id: 1, title: 'Portfolio', url: '/portfolio' },
  { id: 2, title: 'Blog', url: '/blog' },

  { id: 3, title: 'Contact', url: '/contact' },
  { id: 4, title: 'About', url: '/about' },
]

const Navbar = () => {
  const session = useSession()

  const logoutFunc = () => {
    signOut()
  }

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <h3>Tom Hestamp</h3>
      </Link>
      <div className={styles.links}>
        <ModeToggle />
        {staticMenu.map((link) => (
          <Link className={styles.link} key={link.id} href={link.url}>
            {link.title}
          </Link>
        ))}

        {session.status === 'authenticated' && (
          <button className={styles.logout} onClick={logoutFunc}>
            Logout
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar
