import React from 'react'
import styles from './blog.module.css'
import Link from 'next/link'
import Image from 'next/image'

const arrayMap = [
  {
    name: 'Name of Topic 1',
    desc: 'Lorem ipsum text a lot of holla grail text i need in this description, so i just dump out my brain to fill it with this useless data, that is more useless then Lorem ipsum slug',
    link: 'id1',
    img: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Name of Topic 1',
    desc: 'Lorem ipsum text a lot of holla grail text i need in this description, so i just dump out my brain to fill it with this useless data, that is more useless then Lorem ipsum slug',
    link: 'id2',
    img: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Name of Topic 1',
    desc: 'Lorem ipsum text a lot of holla grail text i need in this description, so i just dump out my brain to fill it with this useless data, that is more useless then Lorem ipsum slug',
    link: 'id3',
    img: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Name of Topic 1',
    desc: 'Lorem ipsum text a lot of holla grail text i need in this description, so i just dump out my brain to fill it with this useless data, that is more useless then Lorem ipsum slug',
    link: 'id4',
    img: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Name of Topic 1',
    desc: 'Lorem ipsum text a lot of holla grail text i need in this description, so i just dump out my brain to fill it with this useless data, that is more useless then Lorem ipsum slug',
    link: 'id5',
    img: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Name of Topic 1',
    desc: 'Lorem ipsum text a lot of holla grail text i need in this description, so i just dump out my brain to fill it with this useless data, that is more useless then Lorem ipsum slug',
    link: 'id6',
    img: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
]
const Blog = () => {
  return (
    <div className={styles.container}>
      {arrayMap.map((item) => (
        <Link
          key={item.link}
          className={styles.item}
          href={`/blog/${item.link}`}
        >
          <div className={styles.imgContainer}>
            <Image
              src={item.img}
              width={400}
              height={250}
              alt={item.name}
              className={styles.image}
            />
          </div>

          <div className={styles.content}>
            <h1 className={styles.title}>{item.name}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog
