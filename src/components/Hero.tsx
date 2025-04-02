
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-timeYellow/20 to-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-timeBlue mb-4">
              Welcome to <span className="text-timeYellow">T.I.M.E.</span> Educational Institute
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              Triumphant Institute of Management Education - Your pathway to success in competitive exams
            </p>
            <p className="text-gray-600 mb-8">
              Specialized coaching for Bank exams, SSC, Railways, Insurance and all other competitive exams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-timeBlue hover:bg-blue-800 text-white font-bold">
                Explore Courses
              </Button>
              <Button variant="outline" className="border-timeBlue text-timeBlue hover:bg-timeBlue/10">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/lovable-uploads/abddb4cd-f3cf-498a-9d40-8c2396f6d31d.png" 
                alt="TIME Institute Coaching" 
                className="w-full h-auto object-cover transform transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Exam categories */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white rounded-lg shadow-md p-6 text-center course-card border-t-4 border-timeRed">
            <h3 className="text-xl font-bold mb-2 text-timeRed">BANK</h3>
            <p className="text-sm text-gray-600">PO / CLERK</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center course-card border-t-4 border-timeBlue">
            <h3 className="text-xl font-bold mb-2 text-timeBlue">SSC</h3>
            <p className="text-sm text-gray-600">CGLE / CHSL</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center course-card border-t-4 border-timeGreen">
            <h3 className="text-xl font-bold mb-2 text-timeGreen">RAILWAY</h3>
            <p className="text-sm text-gray-600">All Categories</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 text-center course-card border-t-4 border-timePurple">
            <h3 className="text-xl font-bold mb-2 text-timePurple">INSURANCE</h3>
            <p className="text-sm text-gray-600">All Exams</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
