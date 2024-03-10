import React, { useState } from 'react'
import { Card } from './Card'
import { descriptions } from './info/info'
import MoreInfoModal from './modals/MoreInfoModal'
const Proyects = () => {

    const [modal, setModal] = useState(false)
    const [proyect, setProyect] = useState()

    const searchProyect = (id) => {

        setProyect(descriptions.find(item => item.id === id))
        setModal(!modal)
    };
    return (
        <div id='proyects' className="mt-10">
            <div className="flex flex-col items-center justify-center w-full">
                <h1 className="text-4xl font-semibold">Proyects</h1>
                <hr className="w-44 h-px my-1 bg-[#3B94A8] border-0" />
            </div>
            <div className='flex flex-wrap justify-center pb-10 mt-4 gap-10 '>
                {descriptions.map((i) => (
                    <Card description={i.description} id={i.id} page={i.page} code={i.code} title={i.title} images={i.images} searchProyect={searchProyect} shortDescription={i.shortDescription} />
                ))}

            </div>
            {
                modal && (<div>
                    <MoreInfoModal setModal={setModal} modal={modal} proyect={proyect} />
                </div>)
            }
        </div>

    )
}

export default Proyects

