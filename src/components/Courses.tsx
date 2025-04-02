
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, Users, Calendar } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      title: "Bank PO Preparation",
      description: "Comprehensive course for Bank Probationary Officer exams including SBI PO, IBPS PO and more.",
      features: ["Quantitative Aptitude", "Reasoning", "English", "General Awareness", "Computer Knowledge"],
      duration: "4 months",
      batchSize: "30 students",
      startDate: "Every month",
      category: "BANK",
      color: "timeRed"
    },
    {
      title: "SSC CGL Course",
      description: "Complete preparation for Staff Selection Commission Combined Graduate Level examination.",
      features: ["Quantitative Aptitude", "English Language", "General Intelligence", "General Awareness"],
      duration: "5 months",
      batchSize: "25 students",
      startDate: "Every month",
      category: "SSC",
      color: "timeBlue"
    },
    {
      title: "Railway Exam Preparation",
      description: "Specialized coaching for various Railway recruitment examinations including RRB, RRC, etc.",
      features: ["Mathematics", "General Intelligence", "General Awareness", "Technical Ability"],
      duration: "3 months",
      batchSize: "30 students",
      startDate: "Every month",
      category: "RAILWAY",
      color: "timeGreen"
    },
    {
      title: "Insurance Exam Course",
      description: "Targeted preparation for various insurance sector examinations including LIC, GIC, etc.",
      features: ["Reasoning", "Quantitative Aptitude", "English", "General Awareness", "Insurance Knowledge"],
      duration: "4 months",
      batchSize: "25 students",
      startDate: "Every month",
      category: "INSURANCE",
      color: "timePurple"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-timeBlue mb-4">Our Popular Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our specialized courses designed to help you succeed in various competitive examinations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className={`bg-${course.color} h-2 w-full`}></div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-timeBlue">{course.title}</h3>
                  <Badge className={`bg-${course.color} text-white`}>{course.category}</Badge>
                </div>
                <p className="text-gray-600 mb-6">{course.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Course Coverage:</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {course.features.map((feature, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-timeYellow mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-timeYellow" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-timeYellow" />
                    <span>{course.batchSize}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-timeYellow" />
                    <span>{course.startDate}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-timeYellow hover:bg-amber-400 text-timeBlue font-bold">
                  Enroll Now
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Button variant="outline" className="border-timeBlue text-timeBlue hover:bg-timeBlue/10">
            View All Courses
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
