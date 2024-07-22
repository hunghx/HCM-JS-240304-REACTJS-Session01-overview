
import { useState } from 'react'
import './App.css'
import { Home } from './components/Home'

function App() {
  const [name , setName] =  useState("nguyen van a")
  const callback = (data)=>{
    console.log(data); // nhận được dữ liệu từ con chưa ?
  }


  // bài tập : tạo conponent là 1 form nhập thông tin cá nhân cảu bản thân bao gồm: tên, 
  // ngày sinh, địa chỉ, so diện thoại
  // sau khi nhập xong dữ liệu ấn nút gửi thì hiển thông tin vừa nhập ở component App  
  return (
    <>
      <Home id ={"SV001"} name={name} setName={setName} callback={callback}/>
    </>
  )
}

export default App
