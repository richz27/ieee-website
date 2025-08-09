import { Code, Users, Lightbulb, Award } from "lucide-react"

const Programs = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mt-6 tracking-wide"> 
                Our {" "}
                <span className="bg-gradient-to-r from-purple-300 to-purple-600 text-transparent bg-clip-text">Programs</span>
            </h2>
            <p className="text-md text-center text-neutral-400 max-w-3xl mx-auto mt-4 lg:text-lg">
                Join our flagship Technical Program and engaging community events designed to develop practical skills and foster meaningful connections.
            </p>

            {/* Flagship Program */}
            <div className="mt-8 flex justify-center lg:mx-10">
                <div className="bg-gradient-to-r from-purple-900/20 to-blue-900/20 rounded-lg p-6 w-full max-w-4xl border border-purple-500/20 text-left">
                    <div className="flex items-center mb-4">
                        <Award className="text-purple-400 w-10 h-10 mr-4" />
                        <div>
                            <h3 className="text-2xl lg:text-3xl font-semibold text-neutral-100">IEEE Technical Program</h3>
                            <p className="text-purple-400 font-medium">Our Flagship Program</p>
                        </div>
                    </div>
                    <p className="text-neutral-200 mb-4 lg:text-lg leading-relaxed">
                        A comprehensive 4-month mentorship program that places students in teams of 4–5, led by experienced project managers. 
                        Work collaboratively on real technical projects, participate in peer feedback sessions, and build practical skills through 
                        hands-on development. The program culminates in a final showcase where you'll present to industry professionals.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <ul className="text-neutral-300 text-sm lg:text-base space-y-2">
                            <li>• Team-based project development</li>
                            <li>• Experienced project manager mentorship</li>
                            <li>• Regular peer feedback sessions</li>
                        </ul>
                        <ul className="text-neutral-300 text-sm lg:text-base space-y-2">
                            <li>• Hands-on technical skill building</li>
                            <li>• Industry professional showcase</li>
                            <li>• Portfolio-worthy project outcomes</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-center max-w-5xl mx-auto lg:px-10">
                {/* Program Card: Tech Thursdays */}
                <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/2 p-4">
                    <div className="bg-neutral-900 rounded-lg p-6 w-full max-w-md text-left">
                        <div className="flex items-center mb-4">
                            <Code className="text-blue-400 w-8 h-8 mr-3" />
                            <h3 className="text-xl lg:text-2xl font-semibold text-neutral-100">Tech Thursdays</h3>
                        </div>
                        <p className="text-neutral-200 mb-4 lg:text-lg">
                            Join us every two weeks for food, socializing, and project collaboration. A welcoming space to connect across teams and get help on your work.
                        </p>
                    </div>
                </div>

                {/* Program Card: Speaker Series */}
                <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/2 p-4">
                    <div className="bg-neutral-900 rounded-lg p-6 w-full max-w-md text-left">
                        <div className="flex items-center mb-4">
                            <Users className="text-green-400 w-8 h-8 mr-3" />
                            <h3 className="text-xl lg:text-2xl font-semibold text-neutral-100">Speaker Series</h3>
                        </div>
                        <p className="text-neutral-200 mb-4 lg:text-lg">
                            Learn from industry professionals and past students who share career experiences and technical insights. Member-requested topics ensure maximum value.
                        </p>
                    </div>
                </div>

                {/* Program Card: Workshops */}
                <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/2 p-4">
                    <div className="bg-neutral-900 rounded-lg p-6 w-full max-w-md text-left">
                        <div className="flex items-center mb-4">
                            <Lightbulb className="text-orange-400 w-8 h-8 mr-3" />
                            <h3 className="text-xl lg:text-2xl font-semibold text-neutral-100">Workshops</h3>
                        </div>
                        <p className="text-neutral-200 mb-4 lg:text-lg">
                            Preparatory workshops before the Technical Program begins, helping students build foundational skills often not covered until late undergraduate years.
                        </p>
                    </div>
                </div>

                {/* Program Card: BadHacks */}
                <div className="flex flex-col items-center w-full md:w-1/2 lg:w-1/2 p-4">
                    <div className="bg-neutral-900 rounded-lg p-6 w-full max-w-md text-left">
                        <div className="flex items-center mb-4">
                            <Lightbulb className="text-yellow-400 w-8 h-8 mr-3" />
                            <h3 className="text-xl lg:text-2xl font-semibold text-neutral-100">BadHacks</h3>
                        </div>
                        <p className="text-neutral-200 mb-4 lg:text-lg">
                            Unleash your creativity without worrying about innovation or usefulness. A fun, silly setting to explore interesting projects and socialize with technology.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Programs