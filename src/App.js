import './App.css'
import React, { useState } from 'react'
import Searchbar from './components/SearchBar'
import Result from './components/Result'
import { createTheme, ThemeProvider, Container } from '@material-ui/core'
function App () {
  const [query, setQuery] = useState('0')
  const onQueryChange = (val) => {
    setQuery(val)
  }
  const theme = createTheme({
    status: {
      danger: '#e53e3e'
    },
    palette: {
      neutral: {
        main: '#5c6ac4'
      },
      background: '#5BBF3F'
    }
  })
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container>
          {/* Query selector */}
          <Searchbar onQueryChange={onQueryChange} number={query} />
          {/* Data table */}
          <Result query={query} />
        </Container>
      </ThemeProvider>
    </div>
  )
}

export default App
