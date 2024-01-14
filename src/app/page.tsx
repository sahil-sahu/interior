import Image from 'next/image'
import styles from './page.module.css'
import Header from '@/components/header/header'
import Hero from '@/components/hero/hero'
import Upload from '@/components/Upload/upload'
import Select from '@/components/select/select'
import SearchBox from '@/components/searchArea/searchArea'
import Results from '@/components/searchResults/searchResults'
import Change from '@/components/change/change'
export default function Home() {
  return (
    <main className={styles.main}>
      <Header></Header>
      <Hero></Hero>
      <Upload></Upload>
      <Select></Select>
      <SearchBox></SearchBox>
      <Results></Results>
      <Change></Change>
      <br />
      <br />
      <br />
    </main>
  )
}
