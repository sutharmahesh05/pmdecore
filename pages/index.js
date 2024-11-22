import Head from 'next/head'
import Header from '../components/header'
import Hero from '../components/hero'
import FeaturedProducts from '../components/featured-products'
import Footer from '../components/footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>PMDecore - Luxury Furniture</title>
        <meta name="description" content="Discover premium furniture for your home at PMDecore" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Hero />
        <FeaturedProducts />
      </main>
      <Footer />
    </div>
  )
}

