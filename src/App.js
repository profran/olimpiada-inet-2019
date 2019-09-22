import React from 'react'
import Home from './components/home'
import { ThemeProvider } from '@material-ui/styles'
import theme from './theme'

export default function App () {
  return <ThemeProvider theme={theme}><Home /></ThemeProvider>
}
