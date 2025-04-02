
import Header from "../components/Header";
import Footer from "../components/Footer";
import { CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-timeYellow/20 to-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-timeBlue text-center mb-8">About T.I.M.E.</h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Triumphant Institute of Management Education (T.I.M.E.) is a leading institute providing specialized coaching for competitive exams across India.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl font-bold text-timeBlue mb-4">Our Journey</h2>
                <p className="text-gray-600 mb-4">
                  Established with a vision to provide quality education and guidance to aspirants of various competitive examinations, T.I.M.E. has grown to become one of the most trusted names in the test-prep industry.
                </p>
                <p className="text-gray-600 mb-4">
                  Over the years, we have helped thousands of students achieve their goals and secure positions in prestigious government organizations and banks across the country.
                </p>
                <p className="text-gray-600">
                  Our commitment to excellence and student-centric approach has made us the preferred choice for serious aspirants aiming for success in competitive exams.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-bold text-timeBlue mb-4">Our Mission</h2>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-timeYellow mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">To provide high-quality coaching and guidance to help students realize their full potential</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-timeYellow mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">To create a learning environment that fosters growth, innovation, and excellence</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-timeYellow mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">To continuously evolve our teaching methodology in line with changing exam patterns</p>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-timeYellow mt-0.5 flex-shrink-0" />
                    <p className="text-gray-600">To support and guide students at every step of their preparation journey</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-timeBlue text-center mb-12">Our Leadership Team</h2>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Director" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-timeBlue">Dr. Rajesh Kumar</h3>
                <p className="text-timeYellow font-medium mb-2">Director</p>
                <p className="text-gray-600 text-sm">
                  With over 20 years of experience in education, Dr. Kumar leads our institute with his vision and dedication.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src="https://randomuser.me/api/portraits/women/44.jpg" 
                    alt="Academic Head" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-timeBlue">Dr. Priya Sharma</h3>
                <p className="text-timeYellow font-medium mb-2">Academic Head</p>
                <p className="text-gray-600 text-sm">
                  A renowned educator with expertise in designing comprehensive curriculum for competitive exams.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 overflow-hidden rounded-full">
                  <img 
                    src="https://randomuser.me/api/portraits/men/36.jpg" 
                    alt="Chief Mentor" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-timeBlue">Prof. Amit Verma</h3>
                <p className="text-timeYellow font-medium mb-2">Chief Mentor</p>
                <p className="text-gray-600 text-sm">
                  An experienced mentor who has guided thousands of students towards success in competitive exams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
