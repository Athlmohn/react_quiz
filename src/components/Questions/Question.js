import React,{useState} from 'react'
import {AiOutlineMinus,AiOutlinePlus} from 'react-icons/ai'
function Question({title,info}) {
    const [Show, setShow] = useState(false);
  return (
    <article className='question'>
        <header>
            <h4>{title}</h4>
            <button className='btn' onClick={()=>setShow(!Show)}>

                {Show ? <AiOutlineMinus/> : <AiOutlinePlus/>}
            </button>
        </header>
        {Show && <p>{info}</p>}   
    </article>
  )
}

export default Question