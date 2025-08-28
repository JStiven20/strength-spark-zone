import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    text: "Amazing gym! The trainers are incredibly knowledgeable and the equipment is top-notch. I've seen incredible results in just 3 months.",
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 5,
    text: "Best gym experience ever! Clean facilities, friendly staff, and great community. The group classes are fantastic.",
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 5,
    text: "I love this place! The personal training sessions have transformed my fitness journey. Highly recommend to anyone serious about their health.",
    date: "3 weeks ago"
  },
  {
    id: 4,
    name: "David Wilson",
    rating: 5,
    text: "Exceptional gym with state-of-the-art equipment. The nutrition guidance has been a game-changer for my fitness goals.",
    date: "1 week ago"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    rating: 5,
    text: "Outstanding service and results! The trainers really care about your progress and push you to achieve your best.",
    date: "2 months ago"
  },
  {
    id: 6,
    name: "James Miller",
    rating: 5,
    text: "Perfect gym for all fitness levels. The atmosphere is motivating and the results speak for themselves.",
    date: "3 weeks ago"
  }
];

const ReviewsSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            What Our <span className="text-energy">Members Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real people who transformed their lives with us
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={review.id}
              className="group hover:shadow-large transition-all duration-300 hover:-translate-y-1 animate-fade-in border-0 bg-white"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="flex gap-1 mr-3">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
                
                <p className="text-gray-700 mb-4 leading-relaxed">"{review.text}"</p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-br from-energy to-dark rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{review.name}</h4>
                    <p className="text-xs text-muted-foreground">Verified Member</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;