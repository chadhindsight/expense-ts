// import { useState } from 'react'
import './App.css'
import { AddTransaction } from './components/AddTransaction'
import { Header } from './components/presentational/Header'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <AddTransaction />
    </>
  )
}

export default App
