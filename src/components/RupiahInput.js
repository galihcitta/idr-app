import React, { useState } from 'react'

function RupiahInput({ generateRupiah }) {
    const [rupiahVal, setRupiahVal] = useState('')

    const handleChange = (e) => {
        setRupiahVal(e.target.value)
    }

  const handleKeyPress = (e) => {
     if (e.key === 'Enter') {
        generateRupiah(e.target.value)
        setRupiahVal('')
     }
  }
    return (
        <div className="content-idr">
            <input 
            type="text" 
            placeholder="Masukkan nominal uang" 
            className="content-idr__input"
            onChange={handleChange}
            value={rupiahVal}
            onKeyPress={handleKeyPress}>
            </input>
        </div>
    )
}

export default RupiahInput