function Navbar() {
    {/* Navigation */}

    return(
        <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="text-white font-medium text-xl">
                        <h1>Coteț Mihai</h1>
                    </div>
                    <div className="md:flex space-x-8">
                        <button
                            //onClick={() => scrollToSection("home")}
                            className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                        >
                            Home
                        </button>
                        <button
                            //onClick={() => scrollToSection("about")}
                            className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                        >
                            About
                        </button>
                        <button
                            //onClick={() => scrollToSection("projects")}
                            className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                        >
                            Projects
                        </button>
                        <button
                            //onClick={() => scrollToSection("contact")}
                            className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105"
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export {Navbar}