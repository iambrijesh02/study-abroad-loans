export default function DestinationsSection() {
  const destinations = [
    {
      country: "United States",
      image:
        "https://images.pexels.com/photos/290595/pexels-photo-290595.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      universities: "4,000+ Universities",
      programs: "All Programs Available",
    },
    {
      country: "United Kingdom",
      image:
        "https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      universities: "150+ Universities",
      programs: "Top Ranked Programs",
    },
    {
      country: "Canada",
      image:
        "https://images.pexels.com/photos/1680247/pexels-photo-1680247.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      universities: "200+ Universities",
      programs: "Immigration Friendly",
    },
    {
      country: "Australia",
      image:
        "https://images.pexels.com/photos/995764/pexels-photo-995764.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
      universities: "100+ Universities",
      programs: "Work Opportunities",
    },
  ]

  return (
    <section id="destinations" className="section-padding bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Explore Dream Study Abroad Destination</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.country}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-lg font-semibold">{destination.country}</h3>
                </div>
              </div>
              <div className="p-4">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>{destination.universities}</span>
                  <span>{destination.programs}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
