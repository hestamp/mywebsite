import React from 'react'
import styles from './blogpost.module.css'
import Image from 'next/image'
import { notFound } from 'next/navigation'
const getData = async (id) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: 'no-store',
  })

  if (!res.ok) {
    return notFound()
  }

  return res.json()
}

export async function generateMetadata({ params }) {
  const post = await getData(params.id)
  return {
    title: `${post.title} - Tom Hestamp`,
    desciption: post.desc,
  }
}

const BlogPost = async ({ params }) => {
  const myData = await getData(params.id)

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{myData.title}</h1>
          <p className={styles.desc}>{myData.desc}</p>
          <div className={styles.author}>
            <Image
              className={styles.avatar}
              width={40}
              height={40}
              src={myData.image}
            />
            <span className={styles.username}>{myData.username}</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image className={styles.image} fill={true} src={myData.image} />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>{myData.content}</p>
      </div>
    </div>
  )
}

export default BlogPost
