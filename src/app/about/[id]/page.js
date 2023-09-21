import React from 'react'
import '../../../.././public/lib/blog'

export default function Nested({ params }) {
    return (
        <div>
            <h1>{params.id}</h1>
  {arr.map((e)=>{
    <h1>{e.class}</h1>
  })}
        </div>
    )
}
