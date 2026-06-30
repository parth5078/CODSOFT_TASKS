export default function Navbar() {
    return (
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
          <h1 className="text-3xl font-bold text-blue-600">
            JobBoard
          </h1>
  
          <div className="flex gap-6 items-center">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Jobs</a>
            <a href="#" className="hover:text-blue-600">Companies</a>
            <a href="#" className="hover:text-blue-600">Login</a>
  
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">
              Register
            </button>
          </div>
        </div>
      </nav>
    );
  }