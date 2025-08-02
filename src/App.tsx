import './App.css'
import Navbar from './components/Navbar'


function App() {
  return (
    <>
      <header>
        <Navbar/> 
      </header>     

      <main>
        <section id="hero">
          <p>Welcome to</p>
          <h1 className="font-bold underline">Northwestern IEEE Student Branch</h1>
        </section>
      </main>
 
      <footer>This is the footer</footer>
    </>
  )
}

export default App
