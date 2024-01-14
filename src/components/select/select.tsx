import Image from 'next/image'
import styles from './select.module.css'
import Heading from '../heading'
import SelectBox from '../selectBox'
export default function Select() {
  return (
    <section className={styles.select}>
        <div className={styles.selectContainer}>
            <Heading>Select Your Object</Heading>
            <div className={styles.selectionContainer}>
                <SelectBox></SelectBox>
                <SelectBox></SelectBox>
            </div>
        </div>
    </section>
  )
}
