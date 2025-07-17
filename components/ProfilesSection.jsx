export default function ProfilesSection() {
  const profiles = [
    {
      title: "Business",
      description:
        "Business owners and entrepreneurs looking to expand their knowledge and skills through international education programs.",
      icon: "fas fa-briefcase",
      features: ["Business Management", "Entrepreneurship", "MBA Programs", "Executive Education"],
    },
    {
      title: "Non-Resident Indians (NRIs)",
      description:
        "NRI students seeking quality education abroad with special loan schemes and flexible repayment options.",
      icon: "fas fa-globe",
      features: ["Special NRI Schemes", "Flexible Terms", "Multi-currency Options", "Global Support"],
    },
    {
      title: "Agriculture",
      description:
        "Students pursuing agricultural studies and research programs in leading international universities.",
      icon: "fas fa-seedling",
      features: ["Agricultural Sciences", "Research Programs", "Sustainable Farming", "Food Technology"],
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">Profiles Considered For Education Loan</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          We provide education loans for various professional backgrounds and career aspirations
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 card-hover animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${profile.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{profile.title}</h3>
              </div>

              <p className="text-gray-600 mb-4 text-sm leading-relaxed">{profile.description}</p>

              <ul className="space-y-2">
                {profile.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <i className="fas fa-check text-green-500 mr-2 text-xs"></i>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
