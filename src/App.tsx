import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Programs from './components/Programs'
import Team from './components/Team'
import Footer from './components/Footer'


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
          <section id="programs" className="flex flex-col justify-center min-h-screen">
            <Programs />
          </section>
          <section id="team" className="flex flex-col justify-center min-h-screen">
            <Team /> 
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
