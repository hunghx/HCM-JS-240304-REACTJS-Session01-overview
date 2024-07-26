import React, { useCallback, useState } from 'react'
import Show from './Show'

export default function HookCallback() {
    // tối ưu rerender ko cần thiết 
    const [name, setName] = useState('')
    const [count, setCount] = useState(0)
   console.log("cha bị re render");

   const callback = useCallback(()=>{
        setName("name" + new Date().getTime())
    }, [count])

  return (
    <div>
        <p>{name}</p>
       <button type="button" onClick={()=>setCount(count+10)}>Tăng</button>
      <Show hehe={callback}>

      </Show>
    </div>
  )
}
