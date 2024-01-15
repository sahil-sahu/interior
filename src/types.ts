import { ChangeEvent } from 'react';
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