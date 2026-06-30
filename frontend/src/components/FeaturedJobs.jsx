const jobs = [
    {
      company: "Google",
      title: "Frontend Developer",
      location: "Bangalore",
      salary: "₹12 LPA",
    },
    {
      company: "Microsoft",
      title: "React Developer",
      location: "Hyderabad",
      salary: "₹15 LPA",
    },
    {
      company: "Amazon",
      title: "Full Stack Developer",
      location: "Pune",
      salary: "₹18 LPA",
    },
  ];
  
  export default function FeaturedJobs() {
    return (
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
  
          <h2 className="text-4xl font-bold mb-10 text-center">
            Featured Jobs
          </h2>
  
          <div className="grid md:grid-cols-3 gap-8">
  
            {jobs.map((job, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
              >
                <h3 className="text-2xl font-bold">
                  {job.title}
                </h3>
  
                <p className="mt-3">
                  {job.company}
                </p>
  
                <p>{job.location}</p>
  
                <p className="text-blue-600 font-bold mt-3">
                  {job.salary}
                </p>
  
                <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg">
                  Apply Now
                </button>
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  }