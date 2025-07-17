export default function WhyChooseSection() {
  const benefits = [
    {
      title: "Get Lower Interest Rates",
      description: "Competitive interest rates starting from 8.5% per annum with flexible repayment options.",
      icon: "fas fa-percentage",
    },
    {
      title: "Have Flexible Repayment Options",
      description: "Choose from various repayment plans that suit your financial situation and career goals.",
      icon: "fas fa-calendar-alt",
    },
    {
      title: "Enjoy Quick Approval",
      description: "Fast processing and approval within 48 hours with minimal documentation required.",
      icon: "fas fa-clock",
    },
    {
      title: "Have Flexible Repayment Options",
      description: "Moratorium period available during study period and job search phase.",
      icon: "fas fa-hand-holding-usd",
    },
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Why Choose Study Abroad Loans?</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md card-hover animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className={`${benefit.icon} text-blue-600 text-xl`}></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
