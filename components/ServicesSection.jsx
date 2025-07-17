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
          "Quick Processing",
          "Low Interest Rates",
          "Flexible Repayment",
          "No Collateral Required",
          "Expert Guidance",
          "End-to-End Support",
        ],
        image:
          "https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
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
        image:
          "https://images.pexels.com/photos/5212703/pexels-photo-5212703.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
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
        image:
          "https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
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
        image:
          "https://images.pexels.com/photos/4386370/pexels-photo-4386370.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
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
        image:
          "https://images.pexels.com/photos/5212329/pexels-photo-5212329.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
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
        image:
          "https://images.pexels.com/photos/5212361/pexels-photo-5212361.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      },
    },
  ]

  const activeService = services.find((service) => service.id === activeTab)

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Our Special Services</h2>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center mb-8 bg-white rounded-lg p-2 shadow-md">
          {services.map((service) => (
            <button
              key={service.id}
              className={`px-4 py-2 m-1 rounded-md font-medium transition-all duration-300 ${
                activeTab === service.id ? "tab-active shadow-md" : "tab-inactive hover:bg-blue-50"
              }`}
              onClick={() => setActiveTab(service.id)}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 animate__animated animate__fadeIn">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">{activeService.content.title}</h3>
              <p className="text-gray-600 mb-6">{activeService.content.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {activeService.content.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-2"></i>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="btn-primary">Learn More</button>
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
