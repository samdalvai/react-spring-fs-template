import { useState } from 'react'
import Layout from './layout/Layout'
import AppRouter from './routes/AppRouter'

function App() {
  return (
    <Layout>
      <AppRouter />
    </Layout>
  )
}

export default App
