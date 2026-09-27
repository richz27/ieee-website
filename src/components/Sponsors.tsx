import schneiderElectricImg from "../assets/images/sponsors/schneider-electric-logo.jpg";
import hullImg from "../assets/images/sponsors/hull_logo.jpg";

const Sponsors = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mt-6 tracking-wide"> 
                Our <span className="bg-gradient-to-r from-purple-300 to-purple-600 text-transparent bg-clip-text">Sponsors</span>
            </h2>
            <p className="text-md text-center text-neutral-400 max-w-3xl mx-auto p-4 lg:text-lg">
                Thank you to our sponsors, Schneider Electric and Hull Tactical, for their generous support in helping us achieve our mission! If you're interested in becoming a sponsor, please email us at ieee@u.northwestern.edu. 
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-10 lg:mx-10">
                <div className="flex items-center justify-center w-64 h-40 border-[12px] border-white rounded-lg bg-white">
                    <img 
                        className="max-w-full max-h-full object-contain" 
                        src={schneiderElectricImg} 
                        alt="Schneider Electric"
                    />
                </div>

                <div className="flex items-center justify-center w-64 h-40 border-[12px] border-white rounded-lg bg-white">
                    <img 
                        className="max-w-full max-h-full object-contain" 
                        src={hullImg} 
                        alt="Hull Tactical"
                    />
                </div>
            </div>
        </div>
    )
};

export default Sponsors