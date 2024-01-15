'use client';

import { useEffect } from "react";
import Upload from "../Upload/upload";
import Select from "../select/select";
import { handleImageUpload } from "./maskinglogic";
import { ChangeHandler } from "@/types";
interface UploadnSelect {
    inputid:string;
    key:number,
    containerId: string;
    imgId:string;
    coordDisplayId: string;
    maskedImageId:string;
}

export default function UploadnSelect(props:UploadnSelect){

    useEffect(()=>{
    }, [])

    const handleChange:ChangeHandler = (event) =>{
        handleImageUpload(event,props.containerId, props.imgId,props.coordDisplayId, props.maskedImageId);
    }

    return <>
        <Upload ip_handler={handleChange} objid={props.inputid} ></Upload>
        <Select imgid={props.imgId} maskid={props.maskedImageId} container={props.containerId}></Select>
    </>
};