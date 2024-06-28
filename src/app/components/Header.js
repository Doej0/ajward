export default function Header() {
    return (
        <header className="w-full bg-gray-600 text-white p-4 md:flex md:justify-between md:items-center">
            {/*Company Name & Logo container*/}
            <div>AJ Ward Montessori </div>

            {/*Find a center Button and Hamburger Menu*/}
            <div className="flex items-center">
                <button className="bg-orange-500 text-white px-4 py-2 rounded-m">Find a Center</button>

                <div className="md:hidden ml-4">
                    {/*Hamberger Menu Button*/}
                    <button className="text-white focus:outline-none">
                      
<svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
<path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
<path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
</svg>
                    </button>
                </div>
            </div>
        </header>
    );
};