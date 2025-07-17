export default function CTASection() {
  return (
    <section className="section-padding text-blue relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 border-2 border-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-white rounded-full"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-blue font-bold mb-6 animate__animated animate__fadeInUp">
            Take The Next Step Toward Your Dream University
          </h2>
          <p className="text-lg mb-8 opacity-90 animate__animated animate__fadeInUp" style={{ animationDelay: "0.2s" }}>
            Get expert guidance and financial support for your international education journey
          </p>
          <button
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors animate__animated animate__fadeInUp"
            style={{ animationDelay: "0.4s" }}
          >
            Book A Free Loan Consultation Now!
          </button>
        </div>
      </div>
    </section>
  )
}
