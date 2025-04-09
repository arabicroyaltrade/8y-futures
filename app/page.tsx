import { useState } from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-sm bg-black bg-opacity-50">
        <nav className="container mx-auto flex items-center justify-between p-4">
          <h1 className="text-2xl font-bold text-white">8Y-FUTURES</h1>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="text-white hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#services" className="text-white hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#performance" className="text-white hover:text-gray-300">
                Performance
              </a>
            </li>
            <li>
              <a href="#contact" className="text-white hover:text-gray-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center w-full h-screen bg-black">
        {/* Background image or video can be added here */}
        <div className="absolute inset-0">
          <Image
            src="/hero-background.jpg" // Replace with your background image
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-50"
          />
        </div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Welcome to 8Y-FUTURES
          </h2>
          <p className="text-xl md:text-2xl text-white mb-8 max-w-2xl mx-auto">
            High Energy Trading for Institutional Clients—Invest with us and enjoy
            a share of our profits.
          </p>
          <a
            href="#contact"
            className="px-8 py-4 bg-blue-600 text-white text-lg rounded hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">About Us</h2>
        <p className="text-xl text-center max-w-3xl mx-auto">
          At 8Y-FUTURES, we harness the power of high-energy trading
          technology and institutional-grade strategies to deliver exceptional
          investment opportunities. Our focus is on creating a secure and
          profitable environment for our clients.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow rounded text-center">
              <h3 className="text-2xl font-semibold mb-4">Trading Strategies</h3>
              <p>
                We deploy advanced algorithms and high energy trading techniques
                to capitalize on market opportunities.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded text-center">
              <h3 className="text-2xl font-semibold mb-4">
                Investment Management
              </h3>
              <p>
                Our experts manage your capital with a disciplined approach aimed
                at generating steady returns.
              </p>
            </div>
            <div className="p-6 bg-white shadow rounded text-center">
              <h3 className="text-2xl font-semibold mb-4">Risk Management</h3>
              <p>
                Robust systems and strategies designed to minimize risk and
                safeguard your investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Section */}
      <section id="performance" className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Performance</h2>
        <p className="text-xl text-center max-w-3xl mx-auto">
          Our track record speaks for itself—delivering consistent and
          impressive returns for our clients across diverse market conditions.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-100 py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Contact Us</h2>
          <form className="max-w-lg mx-auto space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-4 bg-black text-white text-center">
        <p>© {new Date().getFullYear()} 8Y-FUTURES. All rights reserved.</p>
      </footer>
    </main>
  );
}
