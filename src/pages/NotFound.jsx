import { HomeIcon, Search, ArrowLeft } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      {/* Main Content Container */}
      <div className="text-center max-w-xl mx-auto">
        {/* Error Code */}
        <div className="relative">
          <h1 className="text-9xl font-bold text-gray-200">404</h1>
          <p className="absolute -bottom-2 w-full text-center text-xl font-semibold text-gray-700">
            Page Not Found
          </p>
        </div>

        {/* Error Message */}
        <div className="mt-8">
          <p className="text-gray-600 mb-8">
            {` Oops! The page you're looking for seems to have gone on vacation.
            Don't worry, these things happen to the best of us.`}
          </p>
        </div>

        {/* Search Box */}
        <div className="mt-6 mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for content..."
              className="w-full px-4 py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>

          <button
            onClick={() => (window.location.href = "/")}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 transition duration-150 ease-in-out"
          >
            <HomeIcon className="mr-2 h-5 w-5" />
            Home Page
          </button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            You might find these helpful:
          </h2>
          <ul className="space-y-2">
            <li>
              <a
                href="/about"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Contact Support
              </a>
            </li>
            <li>
              <a
                href="/sitemap"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                Sitemap
              </a>
            </li>
          </ul>
        </div>

        {/* Footer Message */}
        <div className="mt-12 text-sm text-gray-500">
          <p>
            If you believe this is a technical error, please contact our support
            team.
          </p>
        </div>
      </div>

      {/* Visual Elements - Abstract Shapes */}
      <div className="absolute top-1/2 left-10 w-12 h-12 bg-blue-100 rounded-full opacity-50 hidden lg:block" />
      <div className="absolute bottom-1/4 right-10 w-20 h-20 bg-blue-50 rounded-full opacity-50 hidden lg:block" />
      <div className="absolute top-1/4 right-20 w-16 h-16 bg-gray-100 rounded-full opacity-50 hidden lg:block" />
    </div>
  );
};

export default NotFound;
