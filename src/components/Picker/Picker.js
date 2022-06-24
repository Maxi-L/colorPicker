import React, { useState } from 'react'
import './Picker.css'

const Picker = () => {
    const [color, setColor] = useState('linear-gradient(180deg, red, orange, yellow, green, blue, purple)')

  return (
    <div className='colorPicker' style={{background: color}}>
        <div className='picker'>
            <h1>Color Picker</h1>
            <div className='d-flex justify-content-around'>
               <input type="color" value={color} onChange={(e) => setColor(e.target.value)} className='inputColor' />
               <input type="text" value={color === 'linear-gradient(180deg, red, orange, yellow, green, blue, purple)' ? '#000000' : color} onChange={(e) => setColor(e.target.value)} className='inputText'/>
            </div>
        </div>
    </div>
  )
}

export default Picker