import React, { useRef, useState } from 'react'
import Card from './Card'
const Foreground = () => {
    const ref = useRef(null);
    const data=[
        {
            desc: "Quantum bits, existing in a superposition of states until measured.",
            filesize: "0.9mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
        {
            desc: "Several quantum algorithms promise to outperform classical.",
            filesize: "0.7mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "sky"
            }
        },
        {
            desc: "This quantum superposition enables parallel processing, exponentially increasing.",
            filesize: "0.4mb",
            close: true,
            tag: {
                isOpen: false,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
        {
            desc: "One of the intriguing aspects of quantum computing is entanglement.",
            filesize: "0.6mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "green"
            }
        },
        {
            desc: "This phenomenon has profound implications for quantum communication.",
            filesize: "0.4mb",
            close: false,
            tag: {
                isOpen: true,
                tagTitle: "Download Now",
                tagColor: "sky"
            }
        },
    ];
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-8 flex-wrap p-5'>
        {data.map((item,index)=>(
            <Card data={item} reference={ref} />
        ))}
    </div>
  )
}

export default Foreground