import './App.css'
import { useEffect } from 'react'

// lenis scroll import
import Lenis from '@studio-freight/lenis'
import Gallery from './components/Gallery'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <div>
      <Header />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
