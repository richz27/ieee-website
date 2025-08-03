import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/heroSection'


function App() {
  return (
    <>
      <Navbar/> 
      <div className="max-w-7xl mx-auto">
        <main>
          <HeroSection /> 
        </main>
  
        <footer>This is the footer</footer>
      </div>
    </>
  )
}

export default App
