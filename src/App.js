import React from 'react'
import './App.css'
import { numbers, operators } from './data'

const App = () => {
  return (
    <div className='calculator-grid'>
      <div className='display' id='display'>
        <div className='previous-operand'></div>
        <div className='current-operand'></div>
      </div>
      <button id='clear'>AC</button>
      <button>C</button>
      {numbers.map((num) => {
        return (
          <button key={num.id} id={num.id}>
            {num.value}
          </button>
        )
      })}
      {operators.map((operator) => {
        return (
          <button key={operator.id} id={operator.id} value={operator.value}>
            {operator.value}
          </button>
        )
      })}
      <button id='equals'>=</button>
    </div>
  )
}

export default App
