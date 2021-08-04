import React from 'react'
import './App.css'
import Menu from './components/Menu'
import Content from './components/Content'
import { BrowserRouter as Router } from  'react-router-dom'

const App = props => {
  return(
    <div className="App">
      <Router >
        <div className="grid">
          <Menu/>
          <Content/>
        </div>
      </Router>
    </div>
  )
  
}

export default App;