
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      exam: "SBI PO",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      content: "The faculty at T.I.M.E. is exceptional. Their teaching methodology and techniques helped me crack the SBI PO exam. The mock tests were particularly useful in my preparation.",
      rating: 5
    },
    {
      name: "Priya Patel",
      exam: "SSC CGL",
      image: "https://randomuser.me/api/portraits/women/2.jpg",
      content: "I joined T.I.M.E. after attempting the SSC exam once without success. Their structured approach to preparation and regular mock tests gave me the confidence to clear the exam in my next attempt.",
      rating: 5
    },
    {
      name: "Amit Kumar",
      exam: "Railway RRB",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      content: "The study material provided by T.I.M.E. is comprehensive and covers all the topics in detail. The faculty is supportive and always ready to clear doubts. Highly recommended for Railway exam aspirants!",
      rating: 4
    },
    {
      name: "Sneha Gupta",
      exam: "IBPS Clerk",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
      content: "T.I.M.E. provided me with the perfect platform to prepare for banking exams. The regular tests and feedback sessions helped me improve consistently. Thanks to the entire team!",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-timeYellow/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-timeBlue mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our students who have successfully achieved their goals with T.I.M.E. coaching
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-timeYellow/30 to-timeYellow/10 p-6">
                  <div className="flex items-start gap-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-white" 
                    />
                    <div>
                      <h3 className="font-bold text-lg text-timeBlue">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">Qualified: {testimonial.exam}</p>
                      <div className="flex mt-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-timeYellow text-timeYellow" />
                        ))}
                        {[...Array(5 - testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-gray-300" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">"{testimonial.content}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
