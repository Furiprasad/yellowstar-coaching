
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { PhoneCall, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="bg-gradient-to-b from-timeYellow/20 to-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-timeBlue text-center mb-8">Contact Us</h1>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
              Have questions or want to enroll? Get in touch with us and our team will be happy to assist you.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                  <h2 className="text-2xl font-bold text-timeBlue mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <MapPin className="h-6 w-6 text-timeYellow mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">Visit Us</h3>
                        <p className="text-gray-600">Dwarakanagar, NAD, Gajuwaka</p>
                        <p className="text-gray-600">Visakhapatnam, Andhra Pradesh</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <PhoneCall className="h-6 w-6 text-timeYellow mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">Call Us</h3>
                        <p className="text-gray-600">+91 92466 70 639</p>
                        <p className="text-gray-600">+91 98765 43210</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Mail className="h-6 w-6 text-timeYellow mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">Email Us</h3>
                        <p className="text-gray-600">info@timeeducation.com</p>
                        <p className="text-gray-600">admissions@timeeducation.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <Clock className="h-6 w-6 text-timeYellow mt-1" />
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">Office Hours</h3>
                        <p className="text-gray-600">Monday to Saturday: 9:00 AM - 7:00 PM</p>
                        <p className="text-gray-600">Sunday: 10:00 AM - 2:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-timeBlue rounded-lg shadow-lg p-8 text-white">
                  <h2 className="text-2xl font-bold mb-4">Our Branches</h2>
                  <ul className="space-y-4">
                    <li>
                      <h3 className="font-semibold text-timeYellow">Dwarakanagar Branch</h3>
                      <p>123 Main Street, Dwarakanagar, Visakhapatnam</p>
                      <p>Phone: +91 92466 70 639</p>
                    </li>
                    <li>
                      <h3 className="font-semibold text-timeYellow">NAD Branch</h3>
                      <p>456 Park Avenue, NAD Junction, Visakhapatnam</p>
                      <p>Phone: +91 98765 43210</p>
                    </li>
                    <li>
                      <h3 className="font-semibold text-timeYellow">Gajuwaka Branch</h3>
                      <p>789 Oak Lane, Gajuwaka, Visakhapatnam</p>
                      <p>Phone: +91 87654 32109</p>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-white rounded-lg shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-timeBlue mb-6">Send Us a Message</h2>
                  
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <input 
                          type="text" 
                          id="first-name" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-timeYellow" 
                          placeholder="Your first name" 
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <input 
                          type="text" 
                          id="last-name" 
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-timeYellow" 
                          placeholder="Your last name" 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-timeYellow" 
                        placeholder="Your email address" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-timeYellow" 
                        placeholder="Your phone number" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <input 
                        type="text" 
                        id="subject" 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-timeYellow" 
                        placeholder="Message subject" 
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea 
                        id="message" 
                        rows={5} 
                        className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-timeYellow" 
                        placeholder="Your message"
                      ></textarea>
                    </div>
                    
                    <Button className="w-full bg-timeYellow hover:bg-amber-400 text-timeBlue font-bold">
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
