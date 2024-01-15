import Image from 'next/image'
import styles from './select.module.css'
import Heading from '../heading'
import SelectBox from '../selectBox'
import { imgContext } from '@/types';
export default function Select(props:imgContext) {
  return (
    <section className={styles.select}>
        <div className={styles.selectContainer}>
            <Heading>Select Your Object</Heading>
            <div className={styles.selectionContainer}>
                <SelectBox data={{img:"", text:"uploaded", id: props.imgid, container:props.container}}></SelectBox>
                <SelectBox data={{img:"", text:"masked", id: props.maskid, container:props.container}}></SelectBox>
            </div>
        </div>
    </section>
  )
}
