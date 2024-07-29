import React, { useRef } from 'react'

export default function HookRef() {
    // tham chiếu tới thành phần trong DOm
    const input = useRef(null);
    const getInput = () => {
       console.log(input.current.value);
    }

  // thêm ref vào input và gán cho inputRef
  return (
    <div>
      <input ref={input} type='text' placeholder="nhập gì đó đi"/>
      <button onClick={getInput}>Get value</button>
    </div>
  )
}
