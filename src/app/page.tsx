'use client';
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
import { useState } from 'react'
import axios from 'axios';
import { SearchResult } from '@/types';

export default function Home() {
  const [srch, setSearch] = useState<string|undefined>();
  const [result, setResult] = useState<SearchResult[]|undefined>();
  async function search() {
    // Use the IKEA search API here
    const apiUrl = 'https://ikea-api.p.rapidapi.com/keywordSearch';
    const apiKey = 'e3555fbb96msh8aa168c66b87e74p18ff17jsn6f832f83410d';

    const options = {
      method: 'GET',
      url: apiUrl,
      params: {
        keyword: srch,
        countryCode: 'us',
        languageCode: 'en'
      },
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'ikea-api.p.rapidapi.com'
      }
    };

    try {
      const {data} = await axios.request(options);
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <main className={styles.main}>
      <Header></Header>
      <Hero></Hero>
      <UploadnSelect  key={1} inputid={'uploadInput1'} containerId={'Upload'} imgId={'uploadedImage'} coordDisplayId={'coordDisplay'} maskedImageId={'maskedImage'} />
      <UploadnSelect key={2} inputid={'uploadInput2'} containerId={'Upload2'} imgId={'uploadedImage2'} coordDisplayId={'coordDisplay2'} maskedImageId={'maskedImage2'} />
      <SearchBox search={srch} searchGo={search} setSearch={setSearch}></SearchBox>
      <Results  results={result}></Results>
      <Change></Change>
      <br />
      <br />
      <br />
    </main>
  )
}
