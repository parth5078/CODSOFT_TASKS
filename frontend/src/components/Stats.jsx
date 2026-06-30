export default function Stats() {
    const stats = [
      { number: "5000+", label: "Jobs Available" },
      { number: "1200+", label: "Companies" },
      { number: "15K+", label: "Candidates" },
      { number: "98%", label: "Success Rate" },
    ];
  
    return (
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Our Achievements
          </h2>
  
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-xl shadow-lg bg-gray-50"
              >
                <h3 className="text-5xl font-bold text-blue-600">
                  {item.number}
                </h3>
  
                <p className="mt-4 text-gray-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }