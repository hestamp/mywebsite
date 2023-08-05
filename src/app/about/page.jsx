import React from 'react'
import styles from './about.module.css'
import Image from 'next/image'
import MyButton from '@/components/MyButton/MyButton'
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/813465/pexels-photo-813465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          fill={true}
          alt="Background image"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Tom Hestamp</h1>
          <h3 className={styles.imgDesc}>
            Kind of nickname, but now it's more a lifestyle
          </h3>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textItem}>
          <h1 className={styles.textTitle}>About myself</h1>
          <p className={styles.textDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            atque, unde optio quis maiores velit veritatis totam libero minima
            ipsa commodi aspernatur quas odio enim tenetur quidem! Animi, iste
            sed.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            atque, unde optio quis maiores velit veritatis totam libero minima
            ipsa commodi aspernatur quas odio enim tenetur quidem! Animi, iste
            sed.
          </p>
        </div>
        <div className={styles.textItem}>
          <h1 className={styles.textTitle}>About myself</h1>
          <p className={styles.textDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            atque, unde optio quis maiores velit veritatis totam libero minima
            ipsa commodi aspernatur quas odio enim tenetur quidem! Animi, iste
            sed.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            <br />
            Dolorum atque, unde optio quis maiores velit veritatis totam libero
            minima.
            <br />
            <br />
            Ipsa commodi aspernatur quas odio enim tenetur quidem! Animi, iste
            sed.
          </p>
          <MyButton url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About
