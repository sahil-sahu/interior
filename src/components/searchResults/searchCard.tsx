import Image from 'next/image'
import styles from './srch.module.css'

interface Result {
    image: string;
    text: string|undefined;
  }

export default function SearchCard({result}:{result:Result}){

    const handleClick = (event:React.MouseEvent<HTMLDivElement>) =>{
        let x = event.clientX
        let y = event.clientY
        
    }

    return (
        <div className={styles.searchCard}>
            <div className={styles.searchCardO}>
                <div className={styles.searchCardI}>
                    <div onClick={handleClick} className={styles.searchCardM}>
                        <Image src={result.image} alt='result images' width={256} height={256}></Image>
                   </div>
                </div>
            </div>
            <h4>
                {result.text}
            </h4>
        </div>
    )
};