import React, { useEffect, useState } from 'react'

export const HookEffectComponent = () => {
    // useEffect cho phép can thiệp vào vòng đời của component : INIT, MOUNT, UPDATE,UNMOUNT
    const [count, setCount] = useState(()=>{
        console.log("khởi tạo state");
        return 100;
    });
    const [name , setName] = useState("")
    // có 3 cách dùng 
    // useEffect(()=>{
    //     // hàm này được gọi sau mỗi khi render hoặc rerender 
    //     // setCount(1000);
    //     console.log("useEffect được gọi");
    // })

    //
    // useEffect(()=>{
    //     // hàm này chỉ đc gọi 1 lần duy nhat khi component đc mount
    //     // setCount(1000);
    //     console.log("useEffect được gọi 1 lần duy nhất");
    // },[])

    useEffect(()=>{
        // hàm này được gọi sau mỗi khi phụ thuộc thay đỏi
        // setCount(1000);
        console.log("useEffect được gọi khi count thay đỏi");
    },[count])
  return (
    <>
    <div>{count}</div>
    <button onClick={()=>setCount(count+10)}>Increment</button>
    
    <div>{name}</div>
    <button onClick={()=>setName(name+count)}>Increment</button>

    </>
  )
}
