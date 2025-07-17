"use client"
import { useState, useEffect } from "react"

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: "Amit Sharma",
      course: "MS in Computer Science",
      university: "Stanford University",
      rating: 5,
      text: "Study Abroad Loans made my dream of studying at Stanford a reality. The process was smooth and the team was incredibly supportive throughout my journey.",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
    },
    {
      name: "Sneha Kapoor",
      course: "MBA",
      university: "Harvard Business School",
      rating: 5,
      text: "Excellent service and competitive interest rates. The team guided me through every step of the loan process. Highly recommended for international students.",
      image:
        "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
    },
    {
      name: "Priti Sharma",
      course: "MS in Data Science",
      university: "University of Toronto",
      rating: 5,
      text: "Professional and efficient service. They helped me secure funding for my studies in Canada with minimal hassle. Great experience overall.",
      image:
        "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
    },
    {
      name: "Rajesh Kumar",
      course: "MS in Engineering",
      university: "MIT",
      rating: 5,
      text: "Amazing support and guidance throughout the loan process. The team made everything so simple and stress-free.",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
    },
    {
      name: "Anita Patel",
      course: "MBA Finance",
      university: "Oxford University",
      rating: 5,
      text: "Quick approval and competitive rates. Highly professional team that understands student needs perfectly.",
      image:
        "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
    },
    {
      name: "Vikram Singh",
      course: "MS in AI",
      university: "Cambridge University",
      rating: 5,
      text: "Exceptional service from start to finish. They made my dream of studying at Cambridge possible.",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop",
    },
  ]

  const cardsPerSlide = {
    desktop: 3,
    tablet: 2,
    mobile: 1,
  }

  const [currentCardsPerSlide, setCurrentCardsPerSlide] = useState(cardsPerSlide.desktop)
  const totalSlides = Math.ceil(testimonials.length / currentCardsPerSlide)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCurrentCardsPerSlide(cardsPerSlide.desktop)
      } else if (window.innerWidth >= 768) {
        setCurrentCardsPerSlide(cardsPerSlide.tablet)
      } else {
        setCurrentCardsPerSlide(cardsPerSlide.mobile)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)
    return () => clearInterval(interval)
  }, [totalSlides])

  return (
    <section className="section-padding testimonial-section text-white relative overflow-hidden">
     
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 text-6xl font-bold transform rotate-12">Testimonials</div>
        <div className="absolute bottom-32 right-32 text-4xl font-bold transform -rotate-12">Testimonials</div>
        <div className="absolute top-1/2 left-1/4 text-5xl font-bold transform rotate-45">Testimonials</div>
        <div className="absolute top-1/3 right-1/4 text-3xl font-bold transform -rotate-45">Testimonials</div>
      </div>

    
      <div className="absolute top-8 left-8 text-yellow-400 text-4xl animate-bounce-slow">
        <i className="fas fa-star"></i>
      </div>
      <div
        className="absolute bottom-8 right-8 text-yellow-400 text-5xl animate-bounce-slow"
        style={{ animationDelay: "1s" }}
      >
        <i className="fas fa-star"></i>
      </div>
      <div
        className="absolute top-1/4 right-16 text-yellow-400 text-3xl animate-bounce-slow"
        style={{ animationDelay: "2s" }}
      >
        <i className="fas fa-star"></i>
      </div>

      <div className="container relative z-10">
      
        <h2 className="text-4xl md:text-5xl font-semi-bold text-center mb-16">Testimonials</h2>

     
        <div className="max-w-7xl mx-auto">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div
                    className={`grid gap-6 ${
                      currentCardsPerSlide === 3
                        ? "grid-cols-1 lg:grid-cols-3"
                        : currentCardsPerSlide === 2
                          ? "grid-cols-1 md:grid-cols-2"
                          : "grid-cols-1"
                    }`}
                  >
                    {testimonials
                      .slice(slideIndex * currentCardsPerSlide, (slideIndex + 1) * currentCardsPerSlide)
                      .map((testimonial, index) => (
                        <div
                          key={index}
                          className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl h-full flex flex-col"
                        >
                   
                          <div className="flex items-center mb-4">
                            <img
                              src={testimonial.image || "/placeholder.svg"}
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full mr-4 border-2 border-white/30 object-cover"
                            />
                            <div className="flex-1">
                              <h4 className="text-lg font-bold text-white">{testimonial.name}</h4>
                              <div className="flex items-center mt-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                  <i key={i} className="fas fa-star text-yellow-400 text-sm mr-1"></i>
                                ))}
                              </div>
                            </div>
                          </div>

                    
                          <p className="text-white/90 leading-relaxed mb-4 flex-1">"{testimonial.text}"</p>

                  
                          <div className="border-t border-white/20 pt-4">
                            <p className="text-blue-200 text-sm font-medium">{testimonial.course}</p>
                            <p className="text-blue-300 text-xs">{testimonial.university}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

       
          <div className="flex justify-center mt-12 space-x-3">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
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
