export default function Hero() {
    return (
        <section className="w-full bg-gray-200 p-4 relative">
            <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url(/hands.png)' }}></div>
            <div className="relative flex items-center justify-center border-1 border-black-800 bg-white bg-opacity-60 p-4 max-w-lg mx-auto">
                <div className="mt-4">
                    Train up a child in the way he should go: and when he is old, <br/>he will not depart from it.
                    <br/><div className="text-center">Proverbs 22:6</div>
                </div>
            </div>
            <div className="relative mt-4 flex items-center justify-center">
                <button className="px-4 py-2 bg-[#8e2f26] text-white rounded">Learn More</button>
            </div>
        </section>
    );
}; 