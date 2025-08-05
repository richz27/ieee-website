import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'


function App() {
  return (
    <>
      <Navbar /> 
      <div className="mx-auto">
        <main>
          <HeroSection /> 
          <About />
        </main>
        <div className="flex flex-col justify-center min-h-screen">
          Programs: What we do <br/>
          Team: Meet the team <br/>
        </div>
        <footer>This is the footer</footer>
      </div>
    </>
  )
}

export default App
