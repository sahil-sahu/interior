import Image from 'next/image'
import styles from './upload.module.css'
import person from '@/app/assets/person.svg'
import UploadBox from './uploadBox'
import { uploadContext } from '@/types'
export default function Upload(props:uploadContext) {
  return (
    <section className={styles.upload}>
        <div className={styles.uploadContainer}>
            <div className={styles.person}>
                <Image src={person} width={470} alt='upload your image' />
            </div>
            <UploadBox {...props}></UploadBox>
        </div>
    </section>
  )
}
