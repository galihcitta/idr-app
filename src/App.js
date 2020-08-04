import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header'
import RupiahInput from './components/RupiahInput'
import RupiahOutput from './components/RupiahOutput'

function App() {
  const [rupiah, setRupiah] = useState('')

  const generateRupiah = (rupiah) => {
    let fracNumber = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 100, 50]
    let divider = 0, tempMod = 0
    let rupiahStr = ''

    fracNumber.forEach((item, index, arr) => {
        divider = parseInt(rupiah/item)
        if (divider !== 0) {
            tempMod = rupiah % item
            rupiah = tempMod
            rupiahStr = rupiahStr + ` ${divider} x Rp ${item}`
        }
        if (index === arr.length - 1) {
          rupiahStr = rupiahStr + `, Sisa Rp ${rupiah}`
        }
    })
    setRupiah(rupiahStr)
  }
  

  return (
    <div className="App">
      <Header title="IDR Mini App"  />
      <RupiahInput generateRupiah={generateRupiah} />
      <RupiahOutput resultRupiah={rupiah}/>
    </div>
  );
}

export default App;
