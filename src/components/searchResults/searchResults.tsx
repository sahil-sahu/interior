import Image from 'next/image'
import styles from './srch.module.css'
import Heading from '../heading'
import SearchCard from './searchCard'
const data = [
    {
        img: "https://s3-alpha-sig.figma.com/img/1500/9958/e0156f613956cb1521cac16b3305149b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pt-MOdufk~vHaVpp3MW-CzP~-jD8n6rQbgMWztw4BNTzgUt8n1Hm3w1Ym~Hvoq~QyvZDYIfhl1URgHgFkuqBE1DBKXUiYW6E9wK0eJNJaFeCbwApV-KsqbuXcFW~if5QAxzPRgf-t9o7vqt2ccVwB6lcK3X8bTMvWT2EnCo9WmNtnjEXjguAnxAJOz4z~x19cW6T9Tq4qR-6XH7Jn0Lr7jINh8YHNuCAJnWgHSWFj40Qe8bNPghpSYXN~dEciV5sqsNsony8aBjL8~NueqX80IFQuA-iZnqn8cEqVC9IcRm0ASa0DxxyPB4KwjACG28vH78VCLiVKbzjx~vAQ9VG4g__",
        text: "Recliner Sofa"
    },
    {
        img: "https://s3-alpha-sig.figma.com/img/1500/9958/e0156f613956cb1521cac16b3305149b?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Pt-MOdufk~vHaVpp3MW-CzP~-jD8n6rQbgMWztw4BNTzgUt8n1Hm3w1Ym~Hvoq~QyvZDYIfhl1URgHgFkuqBE1DBKXUiYW6E9wK0eJNJaFeCbwApV-KsqbuXcFW~if5QAxzPRgf-t9o7vqt2ccVwB6lcK3X8bTMvWT2EnCo9WmNtnjEXjguAnxAJOz4z~x19cW6T9Tq4qR-6XH7Jn0Lr7jINh8YHNuCAJnWgHSWFj40Qe8bNPghpSYXN~dEciV5sqsNsony8aBjL8~NueqX80IFQuA-iZnqn8cEqVC9IcRm0ASa0DxxyPB4KwjACG28vH78VCLiVKbzjx~vAQ9VG4g__",
        text: "Recliner Sofa"
    },
    {
        img: "https://s3-alpha-sig.figma.com/img/1c11/a238/12e906ceb34ee9933548171c918a1852?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VC4rOrQS2pyji9X1cYV-S4vSf6kk9s-z2vwJKM-U1OvuncocDV1v9ZDPP51z3keK-uVtnkaX05qafsh1D7MCupo7d3nMo3YPcWEJYL6j8Z60NOVWcJHHufu8yyhi5EjNU8FA6FuqIrufQuAE-tevjRDeUkWJife5uricU71Nngh6DaTefDgJSk8OkZ0X1SWMxzFUHa0YxzD3fOeh9Uki5IDeRkysgYvwEYSpzO3fbU-xWScN3z6MBWFziJpeGN-vjTJuwMssoA85RbBrotvjavkaMizTUqE6Q6mQVi~onWRUtQIUaFSrYz0LdnZWk7Vd798lZIQOz8~yE8QebMm-nw__",
        text: "Recliner Sofa"
    },
    {
        img: "https://s3-alpha-sig.figma.com/img/3fe7/8136/304919be946ee5343a41083d8c78dcc5?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UdSDjVGyJgcbqDhxG2SoZkRD6Xz-yQ0O~cwdzCfQSUI66rwfDHdQ9lGvZcz9Q8BIW9GuqKMr~iqIo3GrLSQGNyMsF1Nw9Dq-J557TWPatmuefrNYz1-Zv34ll1fW-VFPyfhsZpvXLJW59M0jxQuz9HXtudbpIwzwiy7tY5C6hN03e~XT5Zf7Cp4mximpf7wcU-WSNd40tZKXnWexezUIk3BfkoZCm7MvNFB7NIyPjcpDiFo1KbnPCJHHBG1QzP9nRwUUdLSBi5dqjVd~-jp0qjJY8xFqBm--cMYquXB~RZfT92SB3c~EBdSgCYHd2N0AKowfpWyndesGb7G5GSVWWg__",
        text: "Recliner Sofa"
    },
    {
        img: "https://s3-alpha-sig.figma.com/img/e1ce/91c5/cbcf08ea6ef46c6a0f814caa3d2a8c95?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kBWVJ9AV4VX9iTFjlhpLXrEoKfbUwd7sCd66GThqrtnow-XpkeVqL1xVRHjswCfIrNCOlj5EBJc7z87BMQNuO95qVZgrSFGCkqL7UtxVknIWXKUrkdHekOEpTS448jcweH0UurJyIkkNi1oNcHq~fSGfpRSeq71mfD7SjIx7-TZtIGZmXzpMXESQq2N2XhAwZy1XpzyOM0Lr6N-dUsCTkJiKJy~9ZYajrlzcuDyTmX-ljsLp5y-9WAYDKvI4UxHBbYaT3Tyoh7GAjCJ~w0o80~1qoki9KDbuFYRl7JIhS6peUXdYWRYLGdA8RwtGoftcnH59hjh-2EZKAlvPblKNMA__",
        text: "Recliner Sofa"
    },
    {
        img: "https://s3-alpha-sig.figma.com/img/7516/8cde/9c2018adcdbd20fabf8ae03f263a2577?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GtbBsCeD~bNjF5ajkLn6YLekV7u3cVVgq02532aJCxQihTaq-pt4iWSSV5iXY4RkeBtUs7r8RtDeQHwl6pVjuIEVmHtuhiq8OSI9FWkLKfM8CQzcS1a-4V8yRVH9Bxkwx3Dtw13F-h9KIPR77LNF34M4Df6-NF2RHv8ZIbCyZGS9x-z9Mco5mKl6qyPoEbC8nTR2eBp0t03KBlN6HmEpbr8Njdxs-XZRKd1JL-YRQ6lSFnaKt3bQFEJfXsQ3z8ASJxmw8NWgx0Rmh4vU0l2ER3S9yxLWdToXWi0PprV8onUaM7uSwyGQJo5tfCSdg0QLK1-jsOJ2OYm1-f4Tr~H~mA__",
        text: "Recliner Sofa"
    },
]
export default function Results() {
  return (
    <section className={styles.results}>
        <div className={styles.resultsContainer}>
            <Heading>
                Your Search Results
            </Heading>
            <div className={styles.resultsBox}>
                {
                    data.map((obj,i)=>(
                        <SearchCard key={i} result={obj}></SearchCard>
                    ))
                }
            </div>
            <Heading>
                Your Description Results
            </Heading>
            <div className={styles.resultsBox}>
                {
                    data.map((obj,i)=>(
                        <SearchCard key={i} result={obj}></SearchCard>
                    ))
                }
            </div>
        </div>
    </section>
  )
}
