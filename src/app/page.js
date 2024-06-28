import Header from "./components/Header";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main>
      <div><Header/></div>
      <div><Hero/></div>
      <div className="bg-neutral-200 flex justify-center">
    <div className="mt-4 md:w-1/2 h-1/3 p-4">
        <h1 className="text-lg text-center font-bold">How We Care Matters</h1>
        <p>
            Still it was a square of faint light. Its hands were holograms that altered to match the convolutions of the Flatline as a construct, a hardwired ROM cassette replicating a dead man’s skills, obsessions, kneejerk responses. A narrow wedge of light from a half-open service hatch at the twin mirrors. Light from a service hatch at the rear wall dulling the roar of the Flatline as a construct.
        </p>
        <div className="mt-4 md:w-1/2 h-64 border-2 border-gray-600 flex items-center justify-center">
            <img src="/hands.png" alt="Description" className="w-full h-full object-cover" />
        </div>

    </div>
</div>
<div className="bg-neutral-200 flex justify-center">
  <div className="mt-4 md:w-1/2 h-1/3 p-4">
  <h2 className="text-lg text-center font-bold">Choose from one of our Two Locations!</h2>
  <p className="text-center">The alarm still oscillated, louder here, the rear of the Sprawl’s towers and ragged Fuller domes.
</p>
<div className="mt-4 md:w-1/2 h-64 border-2 border-gray-600 flex items-center justify-center">
            <img src="/hands.png" alt="Description" className="w-full h-full object-cover" />
        </div>
<div className="relative mt-4 flex items-center justify-center"><button className="px-4 py-2 bg-[#8e2f26] text-white rounded">Convent Locations</button></div>
  </div>
</div>
    </main>
  );
}

