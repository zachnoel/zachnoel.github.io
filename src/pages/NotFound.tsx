
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-tactical-dark mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">Oops! We couldn't find that page</p>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            The page you're looking for might have been moved, deleted, or never existed. 
            Let's get you back on track.
          </p>
          <Button asChild className="bg-tactical-green hover:bg-opacity-90">
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
