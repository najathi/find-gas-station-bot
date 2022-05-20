import React from 'react'
import Chatbot from './components/chatbot/Chatbot'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Slider from './components/Slider'

import './App.css'

const App = () => {
  return (
    <Router>
      <Header />

      <main className="py-3">
        <Container>
          <div className="bot">
            <Route path="/" component={Chatbot} exact />
          </div>
          <Route path="/" component={Slider} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
