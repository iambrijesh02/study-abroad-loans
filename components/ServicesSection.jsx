"use client"
import { useState } from "react"

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("education-loan")

  const services = [
    {
      id: "education-loan",
      title: "Education Loan",
      content: {
        title: "Education Loan For Abroad Studies",
        description:
          "Get comprehensive education loans for studying abroad with competitive interest rates and flexible repayment options.",
        features: [
          "Secured And Unsecured Loans",
          "Competitive Interest Rates",
          "100% Course Funding",
          "Dedicated Loan Expert",
          "Hassle-Free Documentation",
          "Easy Repayment Plans",
        ],
        review: {
          rating: 5,
          text: "I've had such a wonderful experience with Study Abroad Loans (Education Loan) team. They literally handled the entire process and I was simply stress-free. Thank you team!",
        },
        image: "images/loan.jpg",
      },
    },
    {
      id: "scholarships",
      title: "Scholarships",
      content: {
        title: "Scholarship Assistance Program",
        description: "Find and apply for various scholarships to reduce your education costs abroad.",
        features: [
          "Merit-based Scholarships",
          "Need-based Financial Aid",
          "Country-specific Grants",
          "University Scholarships",
          "Application Support",
          "Documentation Help",
        ],
        review: null,
        image: "https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      },
    },
    {
      id: "forex-cards",
      title: "Forex Cards & Travel",
      content: {
        title: "Forex Cards & Travel Services",
        description: "Get forex cards and travel-related services for your study abroad journey.",
        features: [
          "Multi-currency Cards",
          "Competitive Exchange Rates",
          "Travel Insurance",
          "Emergency Assistance",
          "Online Management",
          "24/7 Support",
        ],
        review: null,
        image: "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      },
    },
    {
      id: "visa-banking",
      title: "Visa Banking",
      content: {
        title: "Visa Banking Services",
        description: "Complete visa and banking solutions for international students.",
        features: [
          "Visa Application Support",
          "Document Verification",
          "Banking Solutions",
          "Account Opening",
          "Wire Transfers",
          "Expert Consultation",
        ],
        review: null,
        image: "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      },
    },
    {
      id: "coaching",
      title: "Coaching",
      content: {
        title: "Test Preparation Coaching",
        description: "Comprehensive coaching for IELTS, TOEFL, GRE, GMAT and other entrance exams.",
        features: [
          "Expert Faculty",
          "Personalized Training",
          "Mock Tests",
          "Study Materials",
          "Progress Tracking",
          "Flexible Timings",
        ],
        review: null,
        image: "https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      },
    },
    {
      id: "counseling",
      title: "Counseling",
      content: {
        title: "Educational Counseling Services",
        description: "Get expert guidance on course selection, university choices, and career planning.",
        features: [
          "Career Counseling",
          "University Selection",
          "Course Guidance",
          "Application Support",
          "Interview Preparation",
          "Post-study Planning",
        ],
        review: null,
        image: "https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      },
    },
  ]

  const activeService = services.find((service) => service.id === activeTab)

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-gray-800">
          Our <span className="primary-blue">Special Services</span>
        </h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap mb-8">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-4 py-2 m-1 rounded-md font-semibold border border-blue-800 transition-all duration-300 ${
                activeTab === service.id
                  ? "bg-blue-800 text-white"
                  : "bg-white text-blue-800 hover:bg-blue-50"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 animate__animated animate__fadeIn">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-blue-800">
                {activeService.content.title}
              </h3>
              <p className="text-gray-600 mb-6">{activeService.content.description}</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {activeService.content.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <i className="fas fa-check-circle text-green-500 mr-2 mt-1"></i>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Review Block (only if exists) */}
              {activeService.content.review && (
                <div className="bg-gray-100 p-4 rounded-md shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4">
                  <div className="flex-1">
                    <p className="text-blue-700 font-semibold mb-1">Review</p>
                    <div className="text-yellow-500 mb-2">
                      {Array.from({ length: activeService.content.review.rating }).map((_, i) => (
                        <i key={i} className="fas fa-star mr-1"></i>
                      ))}
                    </div>
                    <p className="text-sm text-gray-700">{activeService.content.review.text}</p>
                  </div>
                  <div>
                    <button className="bg-blue-600 text-white px-5 py-2 rounded-md text-sm font-bold hover:bg-blue-700 transition">
                      APPLY NOW
                    </button>
                  </div>
                </div>
              )}

   
            </div>

            <div className="animate__animated animate__fadeInRight">
              <img
                src={activeService.content.image || "/placeholder.svg"}
                alt={activeService.content.title}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
