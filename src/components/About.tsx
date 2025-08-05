import showcaseImg from "../assets/images/final-showcase.jpg"
import presentImg from "../assets/images/team-showcase.jpg"
import { Zap, Users, Globe } from "lucide-react"

const About = () => {
    return (
        <div className="mt-20">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mt-6 tracking-wide"> 
                About{" "}
                <span className="bg-gradient-to-r from-purple-300 to-purple-600 text-transparent bg-clip-text">Northwestern IEEE</span>
            </h2>
            {/* Content: Image + Description */}
            <div className="mx-4 mt-5 flex flex-wrap justify-center lg:mx-10">
                {/* Image */}
                <div className="flex items-center w-full lg:w-1/2 lg:p-4">
                    <img className="rounded-xl" src={showcaseImg} alt="Photos from IEEE final showcase"></img>
                </div>
                {/* Paragraph Description */}
                <div className="flex flex-col pt-4 justify-center items-center w-full lg:w-1/2 p-4">        
                    <p className="text-md text-left text-neutral-200 max-w-4xl tracking-wide lg:text-xl">
                        The <span className="font-bold bg-gradient-to-r from-purple-300 to-purple-600 text-transparent bg-clip-text"> Northwestern University Student Chapter of the
                        Institute of Electrical and Electronics Engineers (IEEE NU) </span> is one of the most active 
                        technology-focused student organizations on campus. Our members come from a wide range of disciplines, 
                        including electrical engineering, computer engineering, computer science, and more. <br/><br/>
                        
                        The <span className="font-bold bg-gradient-to-r from-blue-300 to-blue-600 text-transparent bg-clip-text">Institute of Electrical and Electronics Engineers (IEEE)
                        </span> is the world's largest technical professional organization dedicated to advancing technology for 
                        humanity. At Northwestern, we foster technical growth, professional development, and community among students 
                        interested in technology and engineering.
                    </p>
                </div>
            </div>
            {/* Mission Statement */}
            <div className="mx-4 mt-15 flex flex-wrap justify-center lg:mx-10">
                {/* Paragraph Description */}
                <div className="flex flex-col pt-4 justify-center items-center w-full lg:w-1/2 p-4">      
                    <h3 className="text-2xl sm:text-2xl lg:text-3xl text-center mt-6 tracking-wide"> 
                        <span className="bg-gradient-to-r from-purple-300 to-purple-600 text-transparent bg-clip-text">Our Mission</span>
                    </h3>  
                    <p className="text-md text-left text-neutral-200 max-w-4xl tracking-wide lg:text-xl my-6">
                        For our student branch here at Northwestern, our mission has always been to provide a comprehensive learning experience for our members in both technical and soft skills, and to build a community of engineers who care about making a positive impact in the world.
                    </p>
                    
                    <div className="w-full max-w-4xl">
                        <h4 className="text-lg font-semibold text-neutral-100 mb-4 lg:text-xl">Our goals are to:</h4>
                        <ul className="space-y-3 lg:ml-8 text-neutral-200">
                            <li className="flex items-start space-x-3">
                                <Zap className="text-purple-400 w-6 h-6 mt-0.5 flex-shrink-0" />
                                <span className="text-md lg:text-lg">Develop technical skills through hands-on projects</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Users className="text-blue-400 w-6 h-6 mt-0.5 flex-shrink-0" />
                                <span className="text-md lg:text-lg">Foster communication and teamwork abilities</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Globe className="text-green-400 w-6 h-6 mt-0.5 flex-shrink-0" />
                                <span className="text-md lg:text-lg">Build a community focused on positive impact</span>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Image */}
                <div className="flex items-center w-full lg:w-1/2 lg:p-4">
                    <img className="rounded-xl" src={presentImg} alt="IEEE team presenting their project to industry judges"></img>
                </div>
            </div>
            {/* "Slogan: Advancing Technology for Humanity" */}
        </div>
    )
};

export default About;   