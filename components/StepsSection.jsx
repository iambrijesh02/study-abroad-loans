export default function StepsSection() {
  const steps = [
    {
      step: "1",
      title: "Share Details & Contact Information",
      description: "Fill out our simple application form with your personal and academic details.",
      icon: "fas fa-user-edit",
      image:
        "https://images.pexels.com/photos/5212663/pexels-photo-5212663.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
    {
      step: "2",
      title: "Get Pre-Qualified For Education Loan",
      description: "Our experts will review your application and provide pre-qualification within 24 hours.",
      icon: "fas fa-check-circle",
      image:
        "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
    {
      step: "3",
      title: "Apply For Your Education Loan",
      description: "Complete the final application process with required documents and get approved.",
      icon: "fas fa-file-signature",
      image:
        "https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">3 Steps To Apply For An Education Loan</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Simple and straightforward process to get your education loan approved
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                <img
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  className="w-20 h-20 rounded-full mx-auto mb-4 shadow-lg object-cover"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn-primary text-lg">Start Your Application</button>
        </div>
      </div>
    </section>
  )
}
