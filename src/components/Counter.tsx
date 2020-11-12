import React, { useState } from 'react';

export interface CounterProps {}

export interface CounterState {
  value: number;
}

export function Counter() {
  const [value, setValue] = useState(0);
  const handleIncrement = () => setValue(value + 1);
  const handleDecrement = () => setValue(value - 1);
  return (
    <>
      <div>{ value }</div>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
    </>
  )
}
