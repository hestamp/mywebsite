import React from 'react'
import styles from './portfolio.module.css'
import Link from 'next/link'
import Image from 'next/image'

const arrayMap = [
  {
    name: 'Websites',
    link: '/portfolio/websites',
    img: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Soon',
    link: '/portfolio/music',
    img: 'https://images.pexels.com/photos/5428826/pexels-photo-5428826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    process: true,
  },
  {
    name: 'Soon',
    link: '/portfolio/movies',
    img: 'https://images.pexels.com/photos/5428826/pexels-photo-5428826.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    process: true,
  },
]

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {arrayMap.map((item) => (
          <Link
            key={item.link}
            className={styles.item}
            href={`${item.process ? '#' : `${item.link}`}`}
          >
            <Image
              src={item.img}
              fill={true}
              alt={item.name}
              className={styles.img}
            />
            <span className={styles.title}>{item.name}</span>
            {item.process && <span className={styles.process}>in process</span>}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Portfolio
