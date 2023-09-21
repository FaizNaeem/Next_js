import React from 'react'

export default function Nested({ params }) {
    return (
        <div>
            <h1 align="center">
                Nested {params.id}
            </h1>
        </div>
    )
}
