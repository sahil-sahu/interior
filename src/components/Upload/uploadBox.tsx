"use client";
import Image from 'next/image'
import styles from './upload.module.css'
import upload from '@/app/assets/upload.svg'
import { ChangeHandler, uploadContext } from '@/types';
import React, { ChangeEvent } from 'react';

export default function UploadBox({ip_handler, objid}:uploadContext){
    return(
        <div className={styles.uploadCard}>
            <Image src={upload} alt='upload'></Image>
            <form>
                <label htmlFor={objid} className={styles.uploadButton}>
                    Upload Image
                </label>
                <input onChange={(event:ChangeEvent<HTMLInputElement>)=>{
                    ip_handler(event);
                }} style={{display:'none'}} type="file" accept="image/*" id={objid}></input>
            </form>
            <h4>
                or drop a file, paste image / URL
            </h4>
        </div>
    );
};