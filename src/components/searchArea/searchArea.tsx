"use client"
import Image from 'next/image'
import styles from './search.module.css'
import Heading from '../heading'
import search from '@/app/assets/search.svg'
import { useState, FC, ChangeEvent } from 'react';
import { SearchType } from '@/types'

interface Option {
    value: string;
    label: string;
  }
  
  interface CustomSelectProps {
    onChange: (value: string) => void;
    value: string;
  }
const options: Option[] = [
{ value: '', label: 'Select Vendor' },
{ value: 'IKEA', label: 'IKEA' },
{ value: 'Amazon', label: 'Amazon' },
{ value: 'Home Depot', label: 'Home Depot' },
{ value: 'WakeFit', label: 'WakeFit' },
];


export default function SearchBox({search:srch, setSearch, searchGo}:SearchType) {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option: Option) => {
        setIsOpen(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <section className={styles.search}>
        <div className={styles.searchContainer}>
            <Heading>Search Object from Your favourite Vendors</Heading>
            <div className={styles.searchBox}>
                <input value={srch}
                    onChange={handleInputChange} type="text" placeholder="Recliner sofa" />
                <button onClick={()=>{searchGo();}}>
                    <Image src={search} alt="Search"/>
                </button>
            </div>
            <br />
            <br />
            <div onClick={toggleDropdown} className={styles.vendorSelect}>
                <select
                    className={styles.customSelect}
                    onClick={toggleDropdown}
                >
                    {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                    ))}
                </select>
                {isOpen && (
                    <ul className={styles.customSelectOptions}>
                    {options.map((option) => (
                        <li key={option.value} onClick={() => handleOptionClick(option)}>
                        {option.label}
                        </li>
                    ))}
                    </ul>
                )}
            </div>
            <div className={styles.prompt}>
                <h3>
                    Hey! You can also provide your object description.
                </h3>
                <div className={styles.promptBox}>
                <textarea
                    rows={4}
                    defaultValue="Red recliner sofa with a bold and crimson hue,Crafted from high-quality and soft fabric..."
                    style={{ width: '100%', outline: 'none' }}
                    />
                </div>
            </div>
        </div>
    </section>
  )
}
