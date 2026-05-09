import schneiderElectricImg from "../assets/images/sponsors/schneider-electric-logo.jpg";

const Sponsors = () => {
    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center mt-6 tracking-wide"> 
                Our <span className="bg-gradient-to-r from-purple-300 to-purple-600 text-transparent bg-clip-text">Sponsors</span>
            </h2>
            <p className="text-md text-center text-neutral-400 max-w-3xl mx-auto p-4 lg:text-lg">
                Thank you to our sponsor, Schneider Electric, for their generous support in helping us achieve our mission. If you're interested in becoming a sponsor, please email us at ieee@u.northwestern.edu. 
            </p>
            <div className="mt-8 flex flex-wrap justify-center lg:mx-10">
                <div className="flex flex-col items-center w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 pb-10">
                    <img 
                        className="max-w-full h-auto mb-4 object-cover border-[12px] border-white rounded-lg" 
                        src={schneiderElectricImg} 
                        alt="Schneider Electric"
                    />
                </div>
            </div>
        </div>
    )
};

export default Sponsors