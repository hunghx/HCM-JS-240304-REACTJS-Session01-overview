import React, { memo } from 'react'

 function Show({hehe}) {
    console.log("con bị render hoặc rendeer");
  return (
    <div>
      <p>Show</p>
      <button onClick={hehe}>Change name</button>
    </div>
  )
}
export default memo(Show) // higher order function
