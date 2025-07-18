export default function HeroSection() {
  return (
    <section id="home" className="hero-bg min-h-screen text-white section-padding">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight secondary-blue">Study Abroad Loan <span className="primary-blue">Made Easy!</span></h1>
            <p className="text-lg mb-4 opacity-90 text-black font-bold">Financing Overseas Education Since 1995</p>
            <p className="text-base mb-8 opacity-80 text-black">
              Get Education Loan from India's most trusted education loan provider. Quick approval, competitive interest
              rates, and flexible repayment options.
            </p>
            <button className="btn-banner text-lg animate__animated animate__pulse animate__infinite">
              <i className="fas fa-check-circle mr-2"></i>
              Check Your Eligibility
            </button>
          </div>

          <div className="animate__animated animate__fadeInRight">
            <div className="relative">
              <img
                src="images/combine.png"
                alt="Student with graduation cap"
                className="w-full h-auto rounded-lg "
              />

              
              <img
                src="images/coin1.gif" 
                alt="Coin"
                className="absolute top-4 left-4 w-20 h-20 animate__animated animate__bounce animate__infinite"
              />
           
              <img
                src="images/coin2.gif" 
                alt="Coin"
                className="absolute top-4 right-1/3 w-20 h-20 animate__animated animate__bounce animate__infinite"
              />

              <img
                src="images/coin3.gif"
                alt="Coin"
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-20 animate__animated animate__bounce animate__infinite"
              />
            
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
