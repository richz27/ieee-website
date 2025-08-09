import mimiImg from "../assets/images/execs/Mimi.png"
import richardImg from "../assets/images/execs/Richard.png"
import katieImg from "../assets/images/execs/Katie.png"
import aditiImg from "../assets/images/execs/Aditi.png"
import canImg from "../assets/images/execs/Can.png"
import naomiImg from "../assets/images/execs/Naomi.png"
import vichedaImg from "../assets/images/execs/Vicheda.png"

const Team = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mt-6 tracking-wide"> 
                Meet our {" "}
                <span className="bg-gradient-to-r from-purple-300 to-purple-600 text-transparent bg-clip-text">Executive Board</span>
            </h2>
            <p className="text-md text-center text-neutral-400 max-w-3xl mx-auto mt-4 lg:text-lg">
                Meet the passionate leaders dedicated to fostering technical growth, building community, and creating positive impact.
            </p>

            <div className="mt-8 flex flex-wrap justify-center lg:mx-10">
                {/* Team Member */}
                <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                    <img 
                        className="w-32 h-32 bg-neutral-700 rounded-lg mb-4 object-cover" 
                        src={mimiImg} 
                        alt="Mimi Zhang"
                    />
                    <h3 className="text-lg lg:text-xl font-semibold text-neutral-100 mb-1 text-center">Mimi Zhang</h3>
                    <p className="text-purple-400 font-medium mb-1 text-center">Co-President</p>
                    <p className="text-neutral-400 text-sm text-center">Junior, Computer Science</p>
                </div>

                {/* Team Member */}
                <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                    <img 
                        className="w-32 h-32 bg-neutral-700 rounded-lg mb-4 object-cover" 
                        src={richardImg} 
                        alt="Richard Zhang"
                    />
                    <h3 className="text-lg lg:text-xl font-semibold text-neutral-100 mb-1 text-center">Richard Zhang</h3>
                    <p className="text-purple-400 font-medium mb-1 text-center">Co-President</p>
                    <p className="text-neutral-400 text-sm text-center">Junior, Computer Science</p>
                </div>

                {/* Team Member */}
                <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                    <img 
                        className="w-32 h-32 bg-neutral-700 rounded-lg mb-4 object-cover" 
                        src={katieImg} 
                        alt="Katie Jiang"
                    />
                    <h3 className="text-lg lg:text-xl font-semibold text-neutral-100 mb-1 text-center">Katie Jiang</h3>
                    <p className="text-purple-400 font-medium mb-1 text-center">Co-Technical Director</p>
                    <p className="text-neutral-400 text-sm text-center">Junior, Computer Engineering</p>
                </div>

                {/* Team Member */}
                <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                    <img 
                        className="w-32 h-32 bg-neutral-700 rounded-lg mb-4 object-cover" 
                        src={aditiImg} 
                        alt="Aditi Ladda"
                    />
                    <h3 className="text-lg lg:text-xl font-semibold text-neutral-100 mb-1 text-center">Aditi Ladda</h3>
                    <p className="text-purple-400 font-medium mb-1 text-center">Co-Technical Director</p>
                    <p className="text-neutral-400 text-sm text-center">Junior, Applied Mathematics</p>
                </div>

                {/* Team Member */}
                <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                    <img 
                        className="w-32 h-32 bg-neutral-700 rounded-lg mb-4 object-cover" 
                        src={canImg} 
                        alt="Can Afacan"
                    />
                    <h3 className="text-lg lg:text-xl font-semibold text-neutral-100 mb-1 text-center">Can Afacan</h3>
                    <p className="text-purple-400 font-medium mb-1 text-center">Treasurer</p>
                    <p className="text-neutral-400 text-sm text-center">Junior, Computer Engineering</p>
                </div>

                {/* Team Member */}
                <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                    <img 
                        className="w-32 h-32 bg-neutral-700 rounded-lg mb-4 object-cover" 
                        src={naomiImg} 
                        alt="Naomi Li"
                    />
                    <h3 className="text-lg lg:text-xl font-semibold text-neutral-100 mb-1 text-center">Naomi Li</h3>
                    <p className="text-purple-400 font-medium mb-1 text-center">Outreach Chair</p>
                    <p className="text-neutral-400 text-sm text-center">Sophomore, Computer Science & Economics</p>
                </div>

                {/* Team Member */}
                <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                    <img 
                        className="w-32 h-32 bg-neutral-700 rounded-lg mb-4 object-cover" 
                        src={vichedaImg} 
                        alt="Vicheda"
                    />
                    <h3 className="text-lg lg:text-xl font-semibold text-neutral-100 mb-1 text-center">Vicheda Narith</h3>
                    <p className="text-purple-400 font-medium mb-1 text-center">Design Lead</p>
                    <p className="text-neutral-400 text-sm text-center">Junior, Computer Science</p>
                </div>
            </div>
        </div>
    )
};

export default Team