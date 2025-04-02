
import { Award, BookOpen, Users, Calendar, Clock, BarChart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="h-10 w-10 text-timeYellow" />,
      title: "Expert Study Material",
      description: "Comprehensive study materials curated by industry experts to help you master each topic"
    },
    {
      icon: <Users className="h-10 w-10 text-timeYellow" />,
      title: "Experienced Faculty",
      description: "Learn from experienced educators who have deep knowledge of competitive exam patterns"
    },
    {
      icon: <Calendar className="h-10 w-10 text-timeYellow" />,
      title: "Regular Mock Tests",
      description: "Practice with regular mock tests designed according to the latest exam patterns"
    },
    {
      icon: <Clock className="h-10 w-10 text-timeYellow" />,
      title: "Flexible Timing",
      description: "Choose from multiple batches with flexible timing to suit your schedule"
    },
    {
      icon: <BarChart className="h-10 w-10 text-timeYellow" />,
      title: "Performance Analytics",
      description: "Track your progress with detailed performance analytics and personalized feedback"
    },
    {
      icon: <Award className="h-10 w-10 text-timeYellow" />,
      title: "Proven Results",
      description: "Consistent record of successful candidates in various competitive exams"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-timeBlue mb-4">Why Choose T.I.M.E.?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            With our expert faculty, comprehensive study materials, and proven teaching methodology, 
            we help students achieve success in competitive exams.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-timeBlue mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
