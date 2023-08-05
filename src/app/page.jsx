import Image from 'next/image'
import styles from './page.module.css'
import HeroPng from 'public/hero.png'
import MyButton from '@/components/MyButton/MyButton'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <h1 className={styles.title}>
          this website is way better, then i had before
        </h1>
        <p className={styles.desc}>
          here you can find some of my works, thoughts and contacts
        </p>
        <MyButton url="/portfolio" text="My Portfolio" />
      </div>
      <div className={styles.block}>
        <Image className={styles.myImg} src={HeroPng} alt="My Image" />
      </div>
    </div>
  )
}
