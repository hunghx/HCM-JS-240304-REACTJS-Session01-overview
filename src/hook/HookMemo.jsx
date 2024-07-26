import React, { useMemo, useState } from 'react'

export default function HookMemo() {
    // tối ưu quá trình rerender của component
    // REACT COMPILER 

    const [count, setCount] = useState(0); 
    const [name, setName] = useState(""); 

    const powX2 = ()=>{
        console.log("tao hàm");
        // tính bình phương của count
        return count * count;
    }
    // const rs = powX2();

    const rs = useMemo(()=>{
        console.log("Gọi khi count thay đổi");
        return powX2();
    },[count])

  return (
    <div>
      <p>kêt quả : {rs}</p>
      <button onClick={()=>setCount(count+1)}>Tăng</button>
      <button onClick={()=>setName(name+count)}>change name</button>
    </div>
  )
}
