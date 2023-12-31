import React from 'react'
import { Card } from './Card'
import { descriptions } from './info/info'
const Proyects = () => {
    console.log(descriptions)
    return (
        <div id='proyects' className="mt-10">
            <div className="flex flex-col items-center justify-center w-full">
                <h1 className="text-4xl font-semibold">Proyects</h1>
                <hr className="w-44 h-px my-1 bg-[#3B94A8] border-0" />
            </div>
            {descriptions.map((i) => (
                <Card description={i.description} key={i.id} page={i.page} code={i.code} title={i.title} images={i.images} />
            ))}
        </div>

    )
}

export default Proyects

