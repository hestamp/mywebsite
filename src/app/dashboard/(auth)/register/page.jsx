'use client'

import React, { useState } from 'react'
import styles from './register.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
const RegPage = () => {
  const [err, setErr] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const name = e.target[0].value
    const email = e.target[1].value
    const pass = e.target[2].value

    try {
      const res = await fetch('/api/auth/register/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          pass,
        }),
      })

      res.status === 201 &&
        router.push('/dashboard/login?success=Account has beed created')
    } catch (error) {
      setErr(true)
    }
  }
  return (
    <div className={styles.container}>
      <h3>Sign up</h3>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          minLength={6}
          required
          type="text"
          placeholder="Username"
          className={styles.input}
        />
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
        <button className={styles.button}>Register</button>
      </form>

      {err && <h4 className={styles.myErr}>Some error, please reload page</h4>}

      <div className={styles.orHr}>
        <hr className={styles.hr} />
        <h4>OR</h4>
        <hr className={styles.hr} />
      </div>
      <Link className={styles.button} href="/dashboard/login">
        Login
      </Link>
    </div>
  )
}

export default RegPage
