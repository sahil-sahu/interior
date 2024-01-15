import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/header/header'
import Hero from '@/components/hero/hero'
import Upload from '@/components/Upload/upload'
import Select from '@/components/select/select'
import SearchBox from '@/components/searchArea/searchArea'
import Results from '@/components/searchResults/searchResults'
import Change from '@/components/change/change'
import UploadnSelect from '@/components/uploadnSelect/uploadNSelect'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <Hero></Hero>
      <UploadnSelect  key={1} inputid={'uploadInput1'} containerId={'Upload'} imgId={'uploadedImage'} coordDisplayId={'coordDisplay'} maskedImageId={'maskedImage'} />
      <UploadnSelect key={2} inputid={'uploadInput2'} containerId={'Upload2'} imgId={'uploadedImage2'} coordDisplayId={'coordDisplay2'} maskedImageId={'maskedImage2'} />
      <SearchBox></SearchBox>
      <Results></Results>
      <Change></Change>
      <br />
      <br />
      <br />
    </main>
  )
}
