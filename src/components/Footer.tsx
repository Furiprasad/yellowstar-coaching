
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/">
              <img 
                src="/lovable-uploads/abddb4cd-f3cf-498a-9d40-8c2396f6d31d.png" 
                alt="TIME Institute Logo" 
                className="h-16 object-contain mb-4"
              />
            </Link>
            <p className="text-gray-600 mb-4">
              Triumphant Institute of Management Education - Your pathway to success in competitive exams.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-timeBlue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-timeBlue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-timeBlue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-timeBlue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-timeBlue transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-timeBlue mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-timeBlue transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-timeBlue transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/courses" className="text-gray-600 hover:text-timeBlue transition-colors">Courses</Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-gray-600 hover:text-timeBlue transition-colors">Success Stories</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-timeBlue transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-timeBlue mb-4">Our Courses</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/courses/bank" className="text-gray-600 hover:text-timeBlue transition-colors">Bank Exams</Link>
              </li>
              <li>
                <Link to="/courses/ssc" className="text-gray-600 hover:text-timeBlue transition-colors">SSC Exams</Link>
              </li>
              <li>
                <Link to="/courses/railway" className="text-gray-600 hover:text-timeBlue transition-colors">Railway Exams</Link>
              </li>
              <li>
                <Link to="/courses/insurance" className="text-gray-600 hover:text-timeBlue transition-colors">Insurance Exams</Link>
              </li>
              <li>
                <Link to="/courses/other" className="text-gray-600 hover:text-timeBlue transition-colors">Other Competitive Exams</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-timeBlue mb-4">Contact Us</h3>
            <address className="not-italic text-gray-600 space-y-2">
              <p>Dwarakanagar, NAD, Gajuwaka</p>
              <p>Phone: +91 92466 70 639</p>
              <p>Email: info@timeeducation.com</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-gray-600">
            &copy; {currentYear} T.I.M.E. Educational Institute. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
