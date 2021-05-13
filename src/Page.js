import React, { Component,useState,useEffect} from 'react'
import {Card} from './Card';
export const Page = () => {
    const [name,une]=useState([])
    useEffect(()=>{
        fetch('/buidan1').then(response => {
            if(response.ok){
                return response.json()
            }
        }).then(data => console.log(data))
    },[])

    return(
        <>
        <Card/>
        </>
    )
}
export default Page;