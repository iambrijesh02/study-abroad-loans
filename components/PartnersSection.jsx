"use client"
import { useState, useEffect } from "react"

export default function PartnersSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const partners = [
    { name: "HDFC Bank", logo: "images/partner1.jpg" },
    { name: "ICICI Bank", logo: "images/partner2.jpg" },
    { name: "SBI", logo: "images/partner3.jpg" },
    { name: "Axis Bank", logo: "images/partner4.jpg" },
    { name: "Kotak Bank", logo: "images/partner5.jpg" },
    { name: "Yes Bank", logo: "images/partner6.jpg" },
    { name: "Bank of Baroda", logo: "images/partner5.jpg" },
    { name: "Canara Bank", logo: "images/partner4.jpg" },
      { name: "Yes Bank", logo: "images/partner6.jpg" },
    { name: "Bank of Baroda", logo: "images/partner5.jpg" },

  ]

  const partnersPerSlide = 5 
  const totalSlides = Math.ceil(partners.length / partnersPerSlide)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 3000)
    return () => clearInterval(interval)
  }, [totalSlides])

  return (
    <section className="pb-12 bg-white">
      <div className="container">
        <h2 className="partner-title text-3xl font-bold text-center mb-2 text-gray-800">Our <span className="primary-blue">Partners</span></h2>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center">
                  {partners
                    .slice(slideIndex * partnersPerSlide, (slideIndex + 1) * partnersPerSlide)
                    .map((partner, index) => (
                      <div
                        key={index}
                        className="flex justify-center items-center p-2 grayscale-40 hover:grayscale-50 transition-all duration-300"
                      >
                        <img
                          src={partner.logo || "/placeholder.svg"}
                          alt={partner.name}
                          className="max-h-25 w-auto opacity-100 hover:opacity-100 transition-opacity rounded"
                        />
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? "bg-blue-600" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
