export default function SearchBar() {
    return (
      <section className="bg-white py-10 shadow-md">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-4">
  
            <input
              type="text"
              placeholder="Job Title"
              className="border p-3 rounded-lg"
            />
  
            <input
              type="text"
              placeholder="Location"
              className="border p-3 rounded-lg"
            />
  
            <select className="border p-3 rounded-lg">
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Internship</option>
              <option>Remote</option>
            </select>
  
            <button className="bg-blue-600 text-white rounded-lg">
              Search Jobs
            </button>
  
          </div>
        </div>
      </section>
    );
  }