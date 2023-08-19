import React from 'react'
import styles from './category.module.css'
import MyButton from '@/components/MyButton/MyButton'
import Image from 'next/image'
import { items } from './data.js'
import { notFound } from 'next/navigation'
const getData = (cat) => {
  const data = items[cat]

  if (data) {
    return data
  }

  return notFound()
}
const CategoryPage = ({ params }) => {
  const myData = getData(params.category)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {myData.map((item) => (
        <div key={item.id} className={styles.item}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <MyButton text="See more" />
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} fill={true} src={item.image} />
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoryPage
