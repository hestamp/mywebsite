import React from 'react'
import styles from './blogpost.module.css'
import Image from 'next/image'
const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Title</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            atque eum labore excepturi, laudantium repellat, quasi harum qui
            nulla quaerat natus voluptatem quod accusantium eaque magnam
            dignissimos commodi iure nihil.
          </p>
          <div className={styles.author}>
            <Image
              className={styles.avatar}
              width={40}
              height={40}
              src="https://images.pexels.com/photos/5220075/pexels-photo-5220075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <span className={styles.username}>Tom Hestamp</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            fill={true}
            src="https://images.pexels.com/photos/268883/pexels-photo-268883.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
          laborum dolores qui est ducimus veniam nisi blanditiis. Pariatur,
          quaerat assumenda facilis magnam deserunt, fuga natus molestias nisi
          placeat, veritatis qui.
          <br />
          <br />
          ipsum dolor sit, amet consectetur adipisicing elit. Nobis laborum
          dolores qui est ducimus veniam nisi blanditiis. Pariatur, quaerat
          assumenda facilis magnam deserunt, fuga natus molestias nisi placeat,
          veritatis qui.
          <br />
          <br />
          ipsum dolor sit, amet consectetur adipisicing elit. Nobis laborum
          dolores qui est ducimus veniam nisi blanditiis. Pariatur, quaerat
          assumenda facilis magnam deserunt, fuga natus molestias nisi placeat,
          veritatis qui.
        </p>
      </div>
    </div>
  )
}

export default BlogPost
