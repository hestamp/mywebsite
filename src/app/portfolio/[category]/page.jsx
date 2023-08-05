import React from 'react'
import styles from './category.module.css'
import MyButton from '@/components/MyButton/MyButton'
import Image from 'next/image'
const CategoryPage = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            nemo. Est quaerat perspiciatis aut architecto molestias! Quasi eum
            nam atque dolor molestias? Nisi numquam debitis maxime soluta,
            quaerat odio inventore!
          </p>
          <MyButton text="See more" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            nemo. Est quaerat perspiciatis aut architecto molestias! Quasi eum
            nam atque dolor molestias? Nisi numquam debitis maxime soluta,
            quaerat odio inventore!
          </p>
          <MyButton text="See more" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum,
            nemo. Est quaerat perspiciatis aut architecto molestias! Quasi eum
            nam atque dolor molestias? Nisi numquam debitis maxime soluta,
            quaerat odio inventore!
          </p>
          <MyButton text="See more" />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
    </div>
  )
}

export default CategoryPage
