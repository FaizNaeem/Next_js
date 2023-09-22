"use client"
import React,{useState} from 'react'
import Swal from 'sweetalert2'
import 'animate.css';
// import Swal from 'sweetalert2/dist/sweetalert2.js'
// import 'sweetalert2/src/sweetalert2.scss'
import arr from '../../../.././public/lib/blog'
import Link from 'next/link'
import { Navbar } from '@/app/Navbar'

export default function Nested({ params }) {
  // let num = 0
  const [Name, setName] = useState('');
  const get = (i)=>
  {
    console.log(i);
    let getData = [...arr[i].name]
    // console.log(getData[i]);
    setName(getData)
let hi = Name.join()
    
    Swal.fire({
      title: `${hi}`,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })
    

  }
    return (
        <>
        <Navbar/>
        <h1 align="center">Cards : {params.id}</h1>
        <div  style={{display:"flex" , flexDirection:"row" ,alignItems:"center", justifyContent:"space-around" , flexWrap:"wrap"}}>
            {/* <h1>{params.id}</h1> */}
    {arr.map((e ,i)=>{
        return(
            <>
            <div className='mt-5' style={{width:"300px" ,borderRadius:"10px" , textAlign:"center", border:"1px solid gray"}}>
           <img  src={e.pic} style={{borderTopLeftRadius:"10px",borderTopRightRadius:"10px"}} width={300} height={300}/>
           <h2 style={{fontFamily:"serif" , fontWeight:"bold"}}>{e.name}</h2>
                
           <h2 style={{fontFamily:"serif" , fontWeight:"bold"}}>{e.class}</h2>
           <h3 >{e.timing}</h3>
           <h4>{e.issueDate}</h4>
           <button className='btn btn-success mt-2 mb-3' onClick={()=> get(i)}>
           {/* <Link href={`/details?id=${i}&name=${e.name}`}> */}

            Details
            {/* </Link> */}
            </button>
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
  <div className='mt-3' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <p>Selected Name: {Name}</p>
      </div>
    </>
    )
}
