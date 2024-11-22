import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
        <div>
          <h3 className="text-2xl font-bold mb-4">PM D'ECORE</h3>
          <p>Elevating your living space with luxury furniture Fitting  since 2015.</p>
          <p>Phone: +918712359777</p>
          <p>Phone: +917096508003</p>
          <p>Phone: +917204597605</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-gold transition duration-300">Home</Link></li>
            {/* <li><Link href="/products" className="hover:text-gold transition duration-300">Products</Link></li>
            <li><Link href="/about" className="hover:text-gold transition duration-300">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-gold transition duration-300">Contact</Link></li> */}
          </ul>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
          <p>Address:</p>
          <p>Door No. 23-3-39/1E/23</p>
          <p>Vaikuntapuram Arch, VEgitable Market</p>
          <p>M.R.Pali,Tirupati-2 ,Chittoor District ,A.P</p>
          <p></p>
          <p>Email: pmdecore16@gmail.com</p>
        </div>
        <div>
          <h4 className="text-xl font-semibold mb-4">Newsletter</h4>
          <p className="mb-4">Subscribe to our newsletter for exclusive offers and updates.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 w-full rounded-l-full focus:outline-none text-black"
            />
            <button
              type="submit"
              className="bg-gold text-black px-4 py-2 rounded-r-full hover:bg-white hover:text-gold transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 PM D'ECORE . All rights reserved.</p>
      </div>
    </footer>
  )
}

