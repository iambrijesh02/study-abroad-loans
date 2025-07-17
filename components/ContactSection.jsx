export default function ContactSection() {
  return (
    <section id="contact" className="section-padding gradient-bg text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate__animated animate__fadeInLeft">
              <h2 className="text-3xl font-bold mb-6">Talk to an Expert Now</h2>
              <p className="text-lg mb-8 opacity-90">
                Get personalized guidance from our education loan experts. We're here to help you achieve your study
                abroad dreams.
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <i className="fas fa-phone text-xl mr-4"></i>
                  <span>+91 9876543210</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-xl mr-4"></i>
                  <span>info@studyabroadloans.com</span>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-map-marker-alt text-xl mr-4"></i>
                  <span>Mumbai, Delhi, Bangalore, Hyderabad</span>
                </div>
              </div>
            </div>

            <div className="animate__animated animate__fadeInRight">
              <form className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white"
                  />
                </div>

                <select className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white mb-4 focus:outline-none focus:border-white">
                  <option value="">Select Country</option>
                  <option value="usa">United States</option>
                  <option value="uk">United Kingdom</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                </select>

                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white mb-6"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
