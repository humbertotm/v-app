import React, { Component } from 'react';

const CounterButton = props => {
  const {
    count,
    increaseCount,
    decreaseCount
  } = props;

  return (
    <div className="counter-button">
      <button onClick={increaseCount}>+</button>
      <button onClick={decreaseCount}>-</button>
      <h3>Count: {count}</h3>
    </div>
  );
}

export default CounterButton;
