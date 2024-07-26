import React, { useState } from 'react'
import { Form } from './Form';

export const HookStateComponent = () => {

    // cú pháp const [state, setState ] = useState() 
    const [name, setName] = useState(()=>{
        // khối lệnh
        return "nguyễn văn a";
    }); 
    console.log(name);

    const handleChange = ()=>{
        setName("nguyễn văn B")
    }

    const [page, setPage]= useState("Learn")

  return (
    <>
        {/* <div>HookStateComponent</div>
        <p>{name}</p>
        <button onClick={handleChange}>CHange name</button>
        <Form/> */}
       
    </>
    
  )
}
