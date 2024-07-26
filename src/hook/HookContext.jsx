import React, { createContext, useState } from 'react'
import GrandFather from '../components/GrandFather'

export const ThemeContext  = createContext(null);


export default function HookContext() {
    const [count, setCount] = useState(0);

    // tạo không gian, kho lưu trữ để các component con có thế truy cập , thay đổi trạng thái trong không gian đấy

  return (
    <ThemeContext.Provider value={{count,setCount}}>
      <GrandFather/>
    </ThemeContext.Provider>
  )
}
