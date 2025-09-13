import Header from "./components/header"
import Hero from "./components/hero"
import About from "./components/about"
import Gallery from "./components/gallery"
import Footer from "./components/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="featured-work">
        <Gallery />
      </section>
      <Footer />
    </main>
  )
}
