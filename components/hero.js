import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative h-screen">
      <Image
        src="/images/12.jpg"
        alt="Luxury interior background"
        fill
        quality={100} // Ensures maximum quality
        className="object-cover"
        priority
        />

    <div className="relative h-screen">
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Discover the Elegance of PM D'ECORE</h1>
          <p className="text-xl md:text-2xl mb-8">Elevate Your Living Space with Luxury Furniture</p>
          <button className="bg-gold text-black px-8 py-3 text-lg font-semibold rounded-full hover:bg-white hover:text-gold transition duration-300">
            Explore Collection
          </button>
        </div>
      </div>
    </div>
    </div>
  )
}

