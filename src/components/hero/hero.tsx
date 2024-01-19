import Image from 'next/image'
import styles from './hero.module.css'
import heroBg from '@/app/assets/heroBg.svg'
import heroImg from '@/app/assets/hero.png'
export default function Hero() {
  return (
    <section className={styles.hero}>
        <div className={styles.heroContainer}>
            <Image className={styles.heroImg} src={heroImg} alt='Hero Image' />
            <Image className={styles.heroBg} src={heroBg} alt='Hero Bg' />
        </div>
    </section>
  )
}
