import React from 'react'
import styles from './contact.module.css'
import Image from 'next/image'
import MyButton from '@/components/MyButton/MyButton'
const Contact = () => {
  return (
    <div className={styles.contact}>
      <h1 className={styles.title}>Let`s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt="Contact Picture"
            fill={true}
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.inputText} />
          <input
            type="email"
            placeholder="email"
            className={styles.inputText}
          />
          <textarea
            placeholder="message"
            cols="30"
            rows="10"
            className={styles.textArea}
          />
          <MyButton text="Send" />
        </form>
      </div>
    </div>
  )
}

export default Contact
