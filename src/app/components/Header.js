export default function Header() {
    return (
        <header className="w-full bg-[#1b1751] text-white p-4 md:flex md:justify-between md:items-center">
            {/* Company Name & Logo container */}
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img src="/ajwlogo.svg" alt="Company Logo" className="h-10 md:h-12" />
                    <span className="ml-2">AJ Ward Montessori</span>
                </div>

                {/* Hamburger Menu */}
                <div className="md:hidden">
                    <button className="text-white focus:outline-none">
                        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 18L20 18" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M4 12L20 12" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                            <path d="M4 6L20 6" stroke="#000000" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Nav Links */}
            <nav className="hidden md:flex space-x-4">
                <a href="#" className="hover:text-gray-400">Home</a>
                <a href="#" className="hover:text-gray-400">About</a>
                <a href="#" className="hover:text-gray-400">Services</a>
                <a href="#" className="hover:text-gray-400">Contact</a>
            </nav>

            {/* Find a Center Button */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                <button className="bg-[#c5a16f] text-white px-4 py-2 rounded-md mt-4 md:mt-0">
                    Find a Center
                </button>
            </div>
        </header>
    );
};