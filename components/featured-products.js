import { useState, useEffect } from 'react'
import Image from 'next/image'

// Temporary data until Supabase is set up
const tempProducts = [
  { 
    id: 1, 
    name: 'Traditional Arts', 
    price: 2999, 
    image_url: '/images/001.jpg' 
  },
  { 
    id: 2, 
    name: 'Wall Panel', 
    price: 4599, 
    image_url: '/images/000.jpg' 
  },
  { 
    id: 3, 
    name: 'labacha handle fitting', 
    price: 8699, 
    image_url: '/images/14.jpg' 
  },
]

export default function FeaturedProducts() {
  const [featuredProducts, setFeaturedProducts] = useState(tempProducts)

  return (
    <section className="py-16 bg-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={product.image_url}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gold text-lg font-bold">${product.price.toFixed(2)}</p>
                <button className="mt-4 bg-black text-white px-6 py-2 rounded-full hover:bg-gold hover:text-black transition duration-300">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

