import { Menu, X } from "lucide-react"
import { useState} from "react"; 
import ieeelogo from '../assets/images/logo-white.svg'
const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false); 

    const toggleNavbar = () => {
        setMobileDrawerOpen(!mobileDrawerOpen); 
    }

    return (
        <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="container px-4 mx-auto relative text-sm text-neutral-100">
                {/* Responsiveness: Hidden by default, only visible in large screen */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center flex-shrink-0">
                        <img className="logo h-10 w-auto mr-2" src={ieeelogo} alt="IEEE Logo"/> 
                    </div>
                    <div className="hidden lg:flex mr-18 space-x-12">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#programs">Programs</a>
                        <a href="#team">Team</a>
                    </div>
                    <div className="hidden lg:flex justify-center space-x-12 items center">
                        <a href="#" className="bg-gradient-to-r from-sky-300 to-purple-600 py-2 px-3 rounded-md">
                            Join Us!  
                        </a>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button onClick={toggleNavbar}>
                            {mobileDrawerOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="className=fixed right-0 z-20 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                        <a className="py-4" href="#home">Home</a>
                        <a className="py-4" href="#about">About</a>
                        <a className="py-4" href="#programs">Programs</a>
                        <a className="py-4" href="#team">Team</a>
                        <div className="flex space-x-6">
                            <a 
                                href="#" 
                                className="py-2 px-3 rounded-md bg-gradient-to-r from-sky-300 to-purple-600"
                            >
                                Join Us!
                            </a>
                        </div>
                    </div>
                    
                )}
            </div>
        </nav>
        
    )
}

export default Navbar; 