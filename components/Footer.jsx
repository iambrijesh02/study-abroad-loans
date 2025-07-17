export default function Footer() {
  const footerLinks = {
    "Quick Links": ["Home", "About Us", "Services", "Contact Us", "Blog"],
    Services: ["Education Loans", "Scholarships", "Visa Assistance", "Forex Cards", "Insurance"],
    "Study Destinations": ["Study in USA", "Study in UK", "Study in Canada", "Study in Australia", "Study in Germany"],
    Resources: ["Loan Calculator", "Eligibility Check", "Document Checklist", "FAQs", "Success Stories"],
    Support: ["Customer Support", "Track Application", "Grievance", "Feedback", "Terms & Conditions"],
  }

  return (
    <section className="section-padding bg-gray-50">
      <div className="container">
        {/* Main Footer Container */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {Object.entries(footerLinks).map(([category, links], index) => (
              <div key={category} className="space-y-4">
                {/* Section Title with Pill Background for some sections */}
                <h3
                  className={`text-sm font-semibold ${
                    index === 0 || index === 1
                      ? "bg-blue-900 text-white px-4 py-2 rounded-full text-center"
                      : "text-gray-800"
                  }`}
                >
                  {category}
                </h3>

                {/* Links List */}
                <ul className="space-y-3">
                  {links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-blue-600 transition-colors text-sm leading-relaxed block"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section with Logo and Social Links */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img src="/images/sal-logo.png" alt="Study Abroad Loans" className="w-10 h-10 rounded-full" />
            <span className="text-xl font-bold text-gray-800">Study Abroad Loans</span>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              <i className="fab fa-linkedin-in text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              <i className="fab fa-instagram text-xl"></i>
            </a>
          </div>

          <p className="text-gray-500 text-sm">© 2024 Study Abroad Loans. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
