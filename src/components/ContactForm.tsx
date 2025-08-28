import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours."
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-black mb-4">Ready to Start?</h2>
            <p className="text-xl text-muted-foreground">
              Get in touch with us and begin your fitness journey today
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 animate-scale-in">
            <div className="bg-white p-8 rounded-2xl shadow-medium">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="font-semibold">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="border-border/50 focus:border-energy"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email" className="font-semibold">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="border-border/50 focus:border-energy"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2 mt-6">
                <Label htmlFor="phone" className="font-semibold">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  className="border-border/50 focus:border-energy"
                />
              </div>
              
              <div className="space-y-2 mt-6">
                <Label htmlFor="message" className="font-semibold">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your fitness goals..."
                  rows={5}
                  className="border-border/50 focus:border-energy resize-none"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full mt-8 bg-energy hover:bg-energy/90 text-energy-foreground font-bold py-4 text-lg rounded-xl shadow-energy hover:shadow-large transition-all duration-300 hover:scale-[1.02]"
              >
                Send Inquiry
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;