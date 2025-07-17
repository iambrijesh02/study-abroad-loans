export default function StepsSection() {
  const steps = [
    {
      step: "1",
      title: "Share Details & Contact Information",
      description: "Fill out our simple application form with your personal and academic details.",
      icon: "fas fa-user-edit",
      image:
        "images/step1.png",
    },
    {
      step: "2",
      title: "Get Pre-Qualified For Education Loan",
      description: "Our experts will review your application and provide pre-qualification within 24 hours.",
      icon: "fas fa-check-circle",
      image:
        "images/step2.png",
    },
    {
      step: "3",
      title: "Apply For Your Education Loan",
      description: "Complete the final application process with required documents and get approved.",
      icon: "fas fa-file-signature",
      image:
        "images/step3.png",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">3 Steps To Apply For An <span className="">Education Loan</span> </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Simple and straightforward process to get your education loan approved
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="text-center animate__animated animate__fadeInUp step-wrap"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative mb-6">
                <img
                  src={step.image || "/placeholder.svg"}
                  alt={step.title}
                  className="w-60 h-160 mx-auto mb-4 object-cover"
                />
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {step.step}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-800 mb-3">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

    
      </div>
    </section>
  )
}
