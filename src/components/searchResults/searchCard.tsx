import Image from 'next/image'
import styles from './srch.module.css'

interface Result {
    img: string;
    text: string;
  }

export default function SearchCard({result}:{result:Result}){
    return (
        <div className={styles.searchCard}>
            <div className={styles.searchCardO}>
                <div className={styles.searchCardI}>
                    <div className={styles.searchCardM}>
                        <Image src={result.img} alt='result images' width={256} height={256}></Image>
                   </div>
                </div>
            </div>
            <h4>
                {result.text}
            </h4>
        </div>
    )
};