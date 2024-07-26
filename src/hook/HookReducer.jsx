

import React, { useReducer } from 'react'

const reducer = (state, action) => {
  switch (action) {
    case 'INCRE':
      return state + 1;
    case 'DECRE':
      return state - 1;
  }
  return state;
}

export default function HookReducer() {
  const [count, dispatch] = useReducer(reducer,0)
  return (
    <div>
      <p>{count}</p>
      <button onClick={()=>dispatch('INCRE')}>Tăng</button>
      <button onClick={()=>dispatch('DECRE')}>Giảm</button>
    </div>
  )
}
