
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, MapPin } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 bg-timeBlue text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Begin Your Journey to Success with T.I.M.E.</h2>
            <p className="mb-8 text-white/90">
              Join thousands of successful candidates who have transformed their careers with our expert coaching. 
              Get in touch with us today and take the first step towards your dream job.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <PhoneCall className="h-6 w-6 text-timeYellow mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Contact Number</h3>
                  <p className="text-white/80">+91 92466 70 639</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail className="h-6 w-6 text-timeYellow mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Email Address</h3>
                  <p className="text-white/80">info@timeeducation.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <MapPin className="h-6 w-6 text-timeYellow mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">Visit Us</h3>
                  <p className="text-white/80">Dwarakanagar, NAD, Gajuwaka</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-timeBlue mb-4">Request Information</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-timeYellow" 
                  placeholder="Enter your name" 
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-timeYellow" 
                  placeholder="Enter your phone number" 
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-timeYellow" 
                  placeholder="Enter your email" 
                />
              </div>
              
              <div>
                <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Interested Course</label>
                <select 
                  id="course" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-timeYellow"
                >
                  <option value="">Select a course</option>
                  <option value="bank">Bank Exams</option>
                  <option value="ssc">SSC Exams</option>
                  <option value="railway">Railway Exams</option>
                  <option value="insurance">Insurance Exams</option>
                  <option value="other">Other Competitive Exams</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                <textarea 
                  id="message" 
                  rows={3} 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-timeYellow" 
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <Button className="w-full bg-timeYellow hover:bg-amber-400 text-timeBlue font-bold">
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
