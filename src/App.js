import React from 'react'
import Header from "./components/Header"
import Footer from "./components/Footer"
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'

function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <WeatherCard city="Malang"/>
      <Footer />
    </div>
  )
}

export default App