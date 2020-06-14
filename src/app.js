import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from './themes/theme'
import Router from './Router'
import { toast, Slide } from 'react-toastify'
import Menu from "./components/menu";

toast.configure({
  autoClose: 5000,
  draggable: false,
  transition: Slide,
  hideProgressBar: false,
  closeButton: false
})


const App = () => (
  <ThemeProvider theme={theme}>
      <Menu/>
      <Router />
  </ThemeProvider>
)

export default App
