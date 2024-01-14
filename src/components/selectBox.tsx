import Image from 'next/image'
import styles from './select/select.module.css'
import Heading from './heading'
interface SelectItems {
  img : string;
  text : string;
}
export default function SelectBox({data}: {data:SelectItems | null}) {
  return (
    <div className={styles.selectBox}>
        <Image src={data?.img ?? `https://s3-alpha-sig.figma.com/img/7516/8cde/9c2018adcdbd20fabf8ae03f263a2577?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GtbBsCeD~bNjF5ajkLn6YLekV7u3cVVgq02532aJCxQihTaq-pt4iWSSV5iXY4RkeBtUs7r8RtDeQHwl6pVjuIEVmHtuhiq8OSI9FWkLKfM8CQzcS1a-4V8yRVH9Bxkwx3Dtw13F-h9KIPR77LNF34M4Df6-NF2RHv8ZIbCyZGS9x-z9Mco5mKl6qyPoEbC8nTR2eBp0t03KBlN6HmEpbr8Njdxs-XZRKd1JL-YRQ6lSFnaKt3bQFEJfXsQ3z8ASJxmw8NWgx0Rmh4vU0l2ER3S9yxLWdToXWi0PprV8onUaM7uSwyGQJo5tfCSdg0QLK1-jsOJ2OYm1-f4Tr~H~mA__`}
            alt='Sofa Image'
            width={524}
            height={337}
            >
            
        </Image>
        <div className={styles.pill}>
            {data?.text ?? "Image"}
        </div>
    </div>
  )
}
