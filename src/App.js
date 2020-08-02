import React, { useState } from 'react';
import './App.scss';
import Header from './components/Header'
import RupiahInput from './components/RupiahInput'

function App() {
  const [rupiah, setRupiah] = useState('')

  const generateRupiah = (rupiah) => {
    let fracNumber = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 100, 50]
  }
  

  return (
    <div className="App">
      <Header title="IDR Mini App"  />
      <RupiahInput generateRupiah={generateRupiah} />
    </div>
  );
}

export default App;
