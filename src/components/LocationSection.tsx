import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LocationSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Find <span className="text-energy">Us</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Visit our modern facility and start your fitness journey today
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="space-y-6 animate-slide-in-right">
            <Card className="border-0 bg-gradient-card shadow-medium">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-energy rounded-full flex items-center justify-center text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Our Location</h3>
                    <p className="text-muted-foreground">
                      123 Fitness Street<br />
                      Downtown City, State 12345<br />
                      United States
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-gradient-card shadow-medium">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-energy rounded-full flex items-center justify-center text-white">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Operating Hours</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Monday - Friday: 5:00 AM - 11:00 PM</p>
                      <p>Saturday: 6:00 AM - 10:00 PM</p>
                      <p>Sunday: 7:00 AM - 9:00 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-gradient-card shadow-medium">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-energy rounded-full flex items-center justify-center text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Contact Info</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Phone: (555) 123-4567</p>
                      <p>Email: info@transformgym.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Map Placeholder */}
          <div className="animate-scale-in">
            <Card className="border-0 shadow-large overflow-hidden">
              <div className="aspect-video bg-gradient-to-br from-energy/10 to-dark/10 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin size={48} className="text-energy mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Interactive Map</h3>
                  <p className="text-muted-foreground">
                    Google Maps integration would be embedded here.<br />
                    Click to get directions to our gym.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;