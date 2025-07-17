"use client"
import { useState } from "react"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary-blue text-white sticky top-0 z-50 pt-5">
      <div className="container">
        <div className="flex items-center justify-start py-4">
          <div className="flex items-center space-x-3 custom-logo">
            <Image
              src="/images/sal-logo.png"
              alt="Study Abroad Loans"
              width={50}
              height={50}
              className="rounded-full"
            />
            {/* <span className="text-xl font-bold">Study Abroad Loans</span> */}
          </div>

          {/* Adjusting to move it slightly to the right and maintain spacing */}
          <nav className="hidden md:flex items-center space-x-6 ml-4 slight-right"> {/* Added ml-4 and changed space-x-4 to space-x-6 */}
            <a href="#about" className="nav-link active text-sm hover:text-blue-200 transition-colors">
              About us
            </a>
            <a href="#services" className="nav-link text-sm hover:text-blue-200 transition-colors">
              Our Services
            </a>
            <a href="#about" className="nav-link text-sm hover:text-blue-200 transition-colors">
              Profile
            </a>
            <a href="#destinations" className="nav-link text-sm hover:text-blue-200 transition-colors">
              Countries
            </a>
            <a href="#destinations" className="nav-link text-sm hover:text-blue-200 transition-colors">
              Why Choose Us
            </a>
            <a href="#blogs" className="nav-link text-sm hover:text-blue-200 transition-colors">
              Blogs
            </a>
            <a href="#blogs" className="nav-link text-sm hover:text-blue-200 transition-colors">
              Review us
            </a>
          </nav>

          <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 animate__animated animate__fadeInDown">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="hover:text-blue-200 transition-colors">
                Home
              </a>
              <a href="#services" className="hover:text-blue-200 transition-colors">
                Services
              </a>
              <a href="#about" className="hover:text-blue-200 transition-colors">
                About
              </a>
              <a href="#destinations" className="hover:text-blue-200 transition-colors">
                Destinations
              </a>
              <a href="#contact" className="hover:text-blue-200 transition-colors">
                Contact
              </a>
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors w-fit">
                Apply Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
