import './App.css'
import ieeelogo from './assets/images/logo-white.svg'


function App() {
  return (
    <>
      <header>
        {/* Logo */}
        <img className="logo" src={ieeelogo}/>

        {/* Top Navigation */}
        <nav>
          <a href="#home"> Home </a>
          <a href="#about"> About Us </a>
          <a href="#program"> Our Programs </a>
          <a href="#team"> Team </a>
        </nav>
      </header>

      <main>
        <section id="hero">
          <p>Welcome to</p>
          <h1>Northwestern IEEE Student Branch</h1>
        </section>
      </main>
 
      <footer>This is the footer</footer>
    </>
  )
}

export default App
