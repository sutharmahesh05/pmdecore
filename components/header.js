import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-black bg-opacity-50 text-white py-4 px-6 fixed w-full z-10">
    <div className="container mx-auto flex justify-between items-center">
           <Link href="/">
            <img
                src="/images/logo-whitetext-png.png"
                alt="PMDecore Logo"
                className="h-14 "
            />
            </Link>

      <nav>
        <ul className="flex space-x-6">
          <li><Link href="/" className="hover:text-gold transition duration-300">Home</Link></li>
          {/* <li><Link href="/products" className="hover:text-gold transition duration-300">Products</Link></li>
          <li><Link href="/about" className="hover:text-gold transition duration-300">About</Link></li>
          <li><Link href="/contact" className="hover:text-gold transition duration-300">Contact</Link></li> */}
        </ul>
      </nav>
    </div>
  </header>
  
  )
}

