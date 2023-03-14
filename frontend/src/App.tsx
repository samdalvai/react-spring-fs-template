import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Layout from './layout/Layout'
import AppRouter from './routes/AppRouter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <AppRouter />
    </Layout>
  )
}

export default App
