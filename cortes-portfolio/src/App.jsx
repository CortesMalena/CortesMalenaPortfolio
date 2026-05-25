import './App.css'
import Header from './components/header/Header'
import Hero from './components/Hero/Hero'
import AboutMe from './components/about-me/aboutMe'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
      <div className='app'>
        <Header/>
        <Hero/>
        <AboutMe/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
    </>
  )
}

export default App
