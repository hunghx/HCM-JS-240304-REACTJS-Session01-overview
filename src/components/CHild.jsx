import React, { useContext } from 'react'
import { ThemeContext } from '../hook/HookContext'

export default function CHild() {

    const {count,setCount} = useContext(ThemeContext) // destructoring

  return (
    <div>
      <p>Thằng chaus</p>
      <p>{count}</p>
      <button onClick={()=>setCount(count+10)}>Tăng</button>
    </div>
  )
}
