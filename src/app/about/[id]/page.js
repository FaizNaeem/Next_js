import React from 'react'
import arr from '../../../.././public/lib/blog'

export default function Nested({ params }) {
    return (
        <div>
            {/* <h1>{params.id}</h1> */}
    {arr.map((e)=>{
        return(
            <>
            <div style={{width:"300px" , border:"1px solid black",  }}>
           <h1>{e.name}</h1>
                
           <h2>{e.class}</h2>
           <h3>{e.timing}</h3>
           <h4>{e.issueDate}</h4>
            </div>
            </>
        )
    })}
        </div>
    )
}
