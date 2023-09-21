"use client"
import React from 'react'

import arr from '../../../.././public/lib/blog'
import Link from 'next/link'
import { Navbar } from '@/app/Navbar'

export default function Nested({ params }) {
  const get = (e)=>
  {
console.log(e);
let getData = [...arr]
console.log(getData[e]);

  }
    return (
        <>
        <Navbar/>
        <h1 align="center">Cards : {params.id}</h1>
        <div  style={{display:"flex" , flexDirection:"row" ,alignItems:"center", justifyContent:"space-around" , flexWrap:"wrap"}}>
            {/* <h1>{params.id}</h1> */}
    {arr.map((e)=>{
        return(
            <>
            <div className='mt-5' style={{width:"300px" ,borderRadius:"10px" , border:"1px solid black", textAlign:"center"}}>
           <h1>{e.name}</h1>
                
           <h2>{e.class}</h2>
           <h3>{e.timing}</h3>
           <h4>{e.issueDate}</h4>
           <button onClick={(e)=>get}>Details</button>
            </div>
          
            </>
        )
    })}
        </div>
  <div className='mt-3' style={{display:"flex" ,justifyContent:"center" , alignItems:"center"}}>
    <Link href={"/"}>
    <button className='btn btn-success' style={{margin:"5px"}}>Home</button>
    </Link>
    <Link href={"/about"}>
    <button  className='btn btn-info' style={{margin:"5px"}}>About</button>
    </Link>
    <button  className='btn btn-danger'  style={{margin:"5px"}}>Contact</button>
  </div>
    </>
    )
}
