import Image from 'next/image'
import UploadBox from '../Upload/uploadBox'
import Heading from '../heading'
import styles from './change.module.css'
import SelectBox from '../selectBox';
import resultimg from '@/app/assets/result.jpg'
const imgSrc = `https://s3-alpha-sig.figma.com/img/e471/fc23/043c2332a2599c52c38927ce19b421ec?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=a6eFtWq21AUCCXVT5QJ9iFC4enN1spGqvcIM5i3kYU6Z~EuSpO4h2nHLIexBE5bYE~3Tw81VnJQUL82cOtuzIhO9ROxKI0qIy2SkSFqjHgMjvDQfP8RWaZ0t6I3kt~faxEcQlyv0d~WzKCj1u7QoXDWEmjkE0oMRq8MaRSnbzKjxC9JqVGecUpJSSaM0cVwQ03VRQSmvMmu1d02y4nP5bLQgKqUMan0g9B3eSgEelHWk-mxp3gA50sBYd1DvxcS3qY9EwozH6Y1EyHBp7OeUFS6qSGTiezpGbeoPk7JJg8oQP1GK-UuLGrdTmH0uPAmo5ZvyMQr4uzSfTs98Lb5BrQ__`;
export default function Change() {
    return (
      <section className={styles.change}>
          <div className={styles.changeContainer}>
              <Heading>
                Upload Object You Want to Change
              </Heading>
              <div className={styles.changes}>
                <UploadBox></UploadBox>
                <div className={styles.searchCard}>
                    <div className={styles.searchCardO}>
                        <div className={styles.searchCardI}>
                            <div className={styles.searchCardM}>
                                <Image src={imgSrc} alt='result images' width={426} height={309}></Image>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              <button className={styles.processButton}>
                Process Your Image
              </button>
              <div className={styles.resContainer}>
                <SelectBox data={{
                    img:"https://s3-alpha-sig.figma.com/img/7516/8cde/9c2018adcdbd20fabf8ae03f263a2577?Expires=1705881600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GtbBsCeD~bNjF5ajkLn6YLekV7u3cVVgq02532aJCxQihTaq-pt4iWSSV5iXY4RkeBtUs7r8RtDeQHwl6pVjuIEVmHtuhiq8OSI9FWkLKfM8CQzcS1a-4V8yRVH9Bxkwx3Dtw13F-h9KIPR77LNF34M4Df6-NF2RHv8ZIbCyZGS9x-z9Mco5mKl6qyPoEbC8nTR2eBp0t03KBlN6HmEpbr8Njdxs-XZRKd1JL-YRQ6lSFnaKt3bQFEJfXsQ3z8ASJxmw8NWgx0Rmh4vU0l2ER3S9yxLWdToXWi0PprV8onUaM7uSwyGQJo5tfCSdg0QLK1-jsOJ2OYm1-f4Tr~H~mA__",
                    text:"Before"
                    }}
                    ></SelectBox>
                <SelectBox data={{
                    img:resultimg.src,
                    text:"After"
                    }}
                ></SelectBox>
              </div>
              <button className={styles.processButton}>
                Download Your Image
              </button>
          </div>
      </section>
    )
  }