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
          <section id="home">
            <HeroSection /> 
          </section>
          <section id="about">
            <About />
          </section>
        </main>
        <section id="programs" className="flex flex-col justify-center min-h-screen">
          Programs: What we do <br/>
        </section>
        <section id="team" className="flex flex-col justify-center min-h-screen">
          Team: Meet the team <br/>
        </section>
        <footer>This is the footer</footer>
      </div>
    </>
  )
}

export default App
