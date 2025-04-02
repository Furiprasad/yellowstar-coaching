
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/abddb4cd-f3cf-498a-9d40-8c2396f6d31d.png" 
              alt="TIME Institute Logo" 
              className="h-14 object-contain"
            />
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="font-medium text-gray-800 hover:text-timeBlue transition-colors">
            Home
          </Link>
          <Link to="/about" className="font-medium text-gray-800 hover:text-timeBlue transition-colors">
            About Us
          </Link>
          <Link to="/courses" className="font-medium text-gray-800 hover:text-timeBlue transition-colors">
            Courses
          </Link>
          <Link to="/success-stories" className="font-medium text-gray-800 hover:text-timeBlue transition-colors">
            Success Stories
          </Link>
          <Link to="/contact" className="font-medium text-gray-800 hover:text-timeBlue transition-colors">
            Contact
          </Link>
          <Button className="bg-timeYellow hover:bg-amber-400 text-timeBlue font-bold">
            Enroll Now
          </Button>
        </nav>

        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-50 animate-fade-in">
          <div className="flex flex-col px-4 py-4 space-y-4">
            <Link 
              to="/" 
              className="font-medium text-gray-800 hover:text-timeBlue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="font-medium text-gray-800 hover:text-timeBlue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/courses" 
              className="font-medium text-gray-800 hover:text-timeBlue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Courses
            </Link>
            <Link 
              to="/success-stories" 
              className="font-medium text-gray-800 hover:text-timeBlue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Success Stories
            </Link>
            <Link 
              to="/contact" 
              className="font-medium text-gray-800 hover:text-timeBlue transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-timeYellow hover:bg-amber-400 text-timeBlue font-bold">
              Enroll Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
