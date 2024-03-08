// import { useState } from 'react'
import './App.css'
import { AddTransaction } from './components/AddTransaction'
import Balance from './components/Balance'
import { TransactionList } from './components/TransactionList'
import { Header } from './components/presentational/Header'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Balance />
      <TransactionList />
      <AddTransaction />
    </>
  )
}

export default App
