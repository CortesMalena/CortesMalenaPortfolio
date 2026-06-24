import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import AboutMe from './components/about-me/AboutMe'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Qr from './components/qr/Qr'

function App() {

  return (
    <>
      <div className='app'>
        <Header/>
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Contact/>
        <Qr/>
        <Footer/>
      </div>
    </>
  )
}

export default App
