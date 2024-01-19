import React,{ ChangeEvent } from 'react';
export interface ChangeHandler {
    (event:ChangeEvent<HTMLInputElement>): void;
}
export interface uploadContext {
    ip_handler: ChangeHandler;
    objid:string;
}

export interface imgContext {
    maskid:string;
    imgid:string;
    container:string;
}

export interface SearchType {
    search: string|undefined; // Replace 'any' with the actual type of your Search
    setSearch: React.Dispatch<React.SetStateAction<string|undefined>>;
    searchGo : ()=>void;
  }

export interface SearchResult {
    image: string;
    text:string|undefined // Replace 'any' with the actual type of your Search
  }  