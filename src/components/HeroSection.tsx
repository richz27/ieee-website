import muddLibrary from '../assets/images/mudd-library.jpg';

const HeroSection = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat min-h-screen bg-blend-overlay bg-fixed bg-black/30" style={{backgroundImage: `url(${muddLibrary})`}}>
                <p className="z-10 text-xl sm:text-2xl lg:text-3xl text-neutral-300 mb-5">Welcome to</p>
                <h1 className="z-10 text-4xl sm:text-5xl lg:text-6xl text-center tracking-wide text-neutral-100">
                    Northwestern IEEE Student Branch
                </h1>
            </div>
        </>
        
    )
};

export default HeroSection