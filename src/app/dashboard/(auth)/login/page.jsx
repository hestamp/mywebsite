'use client'

import React from 'react'
import styles from './login.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
const LoginPage = () => {
  const router = useRouter()
  const session = useSession()
  const handleLogin = async (e) => {
    e.preventDefault()

    const email = e.target[0].value
    const password = e.target[1].value

    await signIn('credentials', { email, password })
  }
  if (session.status === 'authenticated') {
    router.push('/dashboard')
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin} className={styles.form}>
        <input
          required
          type="email"
          placeholder="Email"
          className={styles.input}
        />
        <input
          required
          minLength={8}
          type="password"
          placeholder="Password"
          className={styles.input}
        />
        <button className={styles.button}>Login</button>
      </form>
      <div className={styles.orHr}>
        <hr className={styles.hr} />
        <h4>OR</h4>
        <hr className={styles.hr} />
      </div>
      <button className={styles.button} onClick={() => signIn('google')}>
        Sign in with Google
      </button>
    </div>
  )
}

export default LoginPage
