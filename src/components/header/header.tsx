import Image from 'next/image'
import styles from './header.module.css'
import brand from '@/app/assets/brand.png'

export default function Header() {
  return (
    <header className={styles.nav}>
        <nav className={styles.navInner}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <Image src={brand} alt="Logo" height={40} />
                    <h1>
                        InteriorDesign
                    </h1>
                </div>
            </div>
        </nav>
    </header>
  )
}
