const Footer = () => {
    return (
        <footer className="bg-neutral-900 border-t border-neutral-700 py-8 mt-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-semibold text-neutral-100">Northwestern IEEE</h3>
                        <p className="text-neutral-400 text-sm">Advancing technology for humanity</p>
                    </div>
                    
                    <div className="mb-4 md:mb-0">
                        <a href="mailto:ieee@northwestern.edu" className="text-neutral-300 hover:text-purple-400 text-sm">
                            ieee@northwestern.edu
                        </a>
                    </div>
                    
                    <div className="text-xs text-neutral-500">
                        <div>© 2025 Northwestern University IEEE</div>
                        <div>Built and designed by Richard Zhang</div>
                    </div>
                </div>
            </div>
        </footer>
    )
};

export default Footer