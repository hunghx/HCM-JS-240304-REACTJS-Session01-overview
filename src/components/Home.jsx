// function component : rfc , rafc
import React, { useState } from 'react'

export const Home = (props) => {
    // sử dung es6 
    // destructoring với object
    let {id, name, setName, callback} = props
    console.log(id,name);

    // định nghĩa :
    // Props là gì : thuộc tinh của component Home <Home props></Home>
    // Props sử dụng để truyền dữ liệu giữa các component 

    // State là gì : trạng thái của component , ko bị ảnh hưởng bởi quá trình render
    // sử dụng hook : useState
    const [count, setCount] = useState(0); // destructoring với mảng

    // khi state hoặc props của component thay đổi thì component bị re render lại
    const handleIncrease =()=>{
        callback("dữ liệu đã được gửi đến cha")
        setCount((pre)=>pre+1) // thự hiện thay đổi count nhưng     
    }

    // controlled component 
    const [data , setData] = useState({
        name:"",
        phone:"",
        dob :"",
        addres :""
    })
    console.log(data);
    // SPREAD operator
  return (
    <div>
        <p>id : {id}</p>
        <p>name : {name}</p>
        <h1>{count}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <form action="">
            <input type="text" value={data.name} onChange={e=>setData({...data, name: e.target.value})} />
            <input type="text" value={data.address} onChange={e=>setData({...data, address: e.target.value})} />
        </form>
    </div>
  )
}
