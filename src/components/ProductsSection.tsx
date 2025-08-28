import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    id: 1,
    name: "Whey Protein Powder",
    price: "$49.99",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=400",
    description: "Premium whey protein for muscle building"
  },
  {
    id: 2,
    name: "Pre-Workout Energy",
    price: "$34.99",
    image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400",
    description: "Boost your energy and focus for intense workouts"
  },
  {
    id: 3,
    name: "BCAA Supplements",
    price: "$29.99",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400",
    description: "Essential amino acids for recovery"
  },
  {
    id: 4,
    name: "Multivitamins",
    price: "$24.99",
    image: "https://images.unsplash.com/photo-1550572017-edd951b55104?w=400",
    description: "Complete daily nutrition support"
  },
  {
    id: 5,
    name: "Creatine Monohydrate",
    price: "$19.99",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400",
    description: "Increase strength and muscle mass"
  },
  {
    id: 6,
    name: "Fat Burner",
    price: "$39.99",
    image: "https://images.unsplash.com/photo-1584362917165-526a968579e8?w=400",
    description: "Support your weight loss goals"
  }
];

const ProductsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Premium <span className="text-energy">Nutrition</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Fuel your fitness journey with our carefully selected supplements and nutrition products
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group hover:shadow-large transition-all duration-300 hover:-translate-y-2 animate-fade-in border-0 overflow-hidden bg-gradient-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-black text-energy">{product.price}</span>
                  <Button 
                    className="bg-dark hover:bg-dark/90 text-dark-foreground rounded-full px-6 hover:scale-105 transition-all duration-300"
                  >
                    Buy Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;