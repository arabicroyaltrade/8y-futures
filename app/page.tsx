import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center bg-black min-h-screen">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black bg-opacity-80">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          <h1 className="text-2xl font-light text-white uppercase tracking-widest">
            8Y-FUTURES
          </h1>
          <ul className="flex space-x-10">
            <li>
              <a href="#about" className="text-white hover:text-gray-300 transition duration-200">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-white hover:text-gray-300 transition duration-200">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-gray-300 transition duration-200">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center w-full h-screen">
        <div className="absolute inset-0 bg-black"></div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-6xl md:text-8xl font-light text-white mb-4 uppercase tracking-widest">
            8Y-FUTURES
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Pioneering the next era of energy trading.
          </p>
          <Link
            href="/connect"
            className="px-8 py-4 border border-white text-white uppercase tracking-wide rounded hover:bg-white hover:text-black transition"
          >
            Connect
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-light text-center text-white uppercase tracking-wide mb-4">
          About
        </h2>
        <p className="text-center text-gray-400 text-xl max-w-3xl mx-auto">
          Your capital fuels the growth of sustainable energy projects. Leveraging institutional-grade insights, we execute precision trades that unlock exceptional growth and lasting value, driving a sustainable future.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-black py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-light text-center text-white uppercase tracking-wide mb-8">
            Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-400 rounded">
              <h3 className="text-2xl font-extralight text-white uppercase tracking-wider mb-2">
                Trading
              </h3>
              <p className="text-gray-400">
                Advanced algorithmic trading strategies.
              </p>
            </div>
            <div className="p-6 border border-gray-400 rounded">
              <h3 className="text-2xl font-extralight text-white uppercase tracking-wider mb-2">
                Investment
              </h3>
              <p className="text-gray-400">
                Optimized capital management for superior returns.
              </p>
            </div>
            <div className="p-6 border border-gray-400 rounded">
              <h3 className="text-2xl font-extralight text-white uppercase tracking-wider mb-2">
                Risk
              </h3>
              <p className="text-gray-400">
                Smart safeguards to minimize exposure and maximize value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section id="performance" className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-light text-center text-white uppercase tracking-wide mb-4">
          Performance
        </h2>
        <p className="text-center text-gray-400 text-xl max-w-3xl mx-auto">
          Consistent, robust results that epitomize our commitment to futuristic trading.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-black py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-light text-center text-white uppercase tracking-wide mb-8">
            Contact
          </h2>
          <form className="max-w-lg mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 bg-black border border-gray-400 text-white rounded placeholder-gray-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 bg-black border border-gray-400 text-white rounded placeholder-gray-400 focus:outline-none"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 bg-black border border-gray-400 text-white rounded placeholder-gray-400 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 border border-white text-white uppercase tracking-wide rounded hover:bg-white hover:text-black transition"
            >
              Send
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 bg-black text-center">
        <p className="text-gray-400">
          © {new Date().getFullYear()} 8Y-FUTURES. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
