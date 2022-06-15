import React from 'react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from './theme'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </ThemeProvider>
  )
}

export default App