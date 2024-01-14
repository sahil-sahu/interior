import Image from 'next/image'
import styles from './upload.module.css'
import upload from '@/app/assets/upload.svg'

export default function UploadBox(){
    return(
        <div className={styles.uploadCard}>
            <Image src={upload} alt='upload'></Image>
            <button className={styles.uploadButton}>
                Upload Image
            </button>
            <h4>
                or drop a file, paste image / URL
            </h4>
        </div>
    );
};