import './App.css'
import Header from './components/header/Header'
import Hero from './components/Hero/Hero'
import Projects from './components/projects/Projects'

function App() {

  return (
    <>
      <div className='app'>
        <Header/>
        <Hero/>
        <Projects/>
      </div>
    </>
  )
}

export default App
